import { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import {  useParams } from 'react-router-dom';
import { setCartItems } from '../slices/cartSlice';
import IconCart from './IconCart';
import IconMinus from './IconMinus';
import IconPlus from './IconPlus';
import Lightbox from './Lightbox';

const ProductDetail = () => {
  const [product, setProduct] = useState({})
  const [qty, setQty] = useState(0)
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const [alert, setAlert] = useState('')
    
  const dispatch = useDispatch()
  const { id, colorVersion } = useParams()

  useEffect(() => {
    const fetchData =async()=> {
      try {
        const response = await fetch(`http://localhost:8000/api/products/${id}`)
        const data = await response.json()
        setProduct(data)
      } catch (error) {
        setAlert(error)
      }
    }
    fetchData()
  }, [id])

  const { company, name, description, price, countInStock, discount, colors, imageThumbnails, imagesMain } = product;
  
  const selectedImages = colors?.length > 0 ? imagesMain?.[colorVersion]?.images : imagesMain?.[0]?.images;
  const selectedThumbnailImages = colors?.length > 0 ? imageThumbnails?.[colorVersion]?.images : imageThumbnails?.[0]?.images;


  // const priceFixed = price.toFixed(2)

  function addToCartHandler() {
    const newItem = { id, img: (colors && colors.length > 0) ? imageThumbnails[colorVersion[0]]?.images[0] : imageThumbnails[0].images[0], name, qty, price, countInStock};

    dispatch(setCartItems(newItem));
    setQty(0)
  };

  return (
    <div className="product-page-wrapper container">
      {lightboxIsOpen && (
        <Lightbox
          imagesMain={imagesMain}
          imageThumbnails={imageThumbnails}
          colors={colors}
          colorVersion={colorVersion}
          setLightboxIsOpen={setLightboxIsOpen}
          lightboxIsOpen={lightboxIsOpen}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
        />
      )}
      {alert ? (
        <div>Alert!</div>
      ) : (
        <div className="product-display-wrapper">
          <div className="product-main-image-wrapper" onClick={() => setLightboxIsOpen(true)}>
            <img
                src={selectedImages?.[activeImage]}
              alt="main product"
            />
          </div>
          <div className="product-thumbnails">
              {selectedThumbnailImages?.map((thumbnail, index) => (
                <div
                  key={index}
                  className={`thumbnail-wrapper ${activeImage === index ? 'active' : ''}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={thumbnail} alt="thumbnail" />
                </div>
              ))}
          </div>
        </div>
      )}
      <div className="product-info-wrapper">
        <h4 className="company-name">{company}</h4>
        <h1 className="product-name text-large text-dark">{name}</h1>
        <p className="product-description">{description}</p>
        <div className="price-wrapper">
          <h2 className="product-price text-dark">
            ${`${discount ? (price - (price * (discount / 100))).toFixed(2) : price}`}
            {discount && <span className="discount-tab">{discount}%</span>}
          </h2>
          {discount && <small className="original-price text-light">${price}</small>}
        </div>
        <div className="cart-control-wrapper">
          <div className="qty-wrapper">
            <button
              className="btn btn-qty"
              disabled={qty === 0}
              onClick={() => setQty((prevState) => prevState - 1)}
            >
              <IconMinus disabled={qty === 0} />
            </button>
            <p className="qty-info">{qty}</p>
            <button
              className="btn btn-qty"
              disabled={qty >= countInStock}
              onClick={() => setQty((prevState) => prevState + 1)}
            >
              <IconPlus disabled={qty >= countInStock} />
            </button>
          </div>
          <button className="btn btn-primary" disabled={qty === 0} onClick={addToCartHandler}>
            <IconCart type="primary" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail