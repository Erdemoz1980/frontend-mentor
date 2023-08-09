import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../slices/productSlice';
import { setCartItems } from '../slices/cartSlice';
import IconCart from './IconCart';
import IconMinus from './IconMinus';
import IconPlus from './IconPlus';
import Lightbox from './Lightbox';
import Loader from './Loader';
import Alert from './Alert';

const ProductDetail = () => {
  const [qty, setQty] = useState(0)
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomValue, setZoomValue] = useState(1)
    
  const dispatch = useDispatch()
  const { productDetail, isLoading, errMessage } = useSelector(state => state.product);
  const { id, colorVersion } = useParams()

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [id, dispatch]);

  const { company, name, description, price, countInStock, discount, colors, imageThumbnails, imagesMain } = productDetail
  
  const selectedImages = colors?.length > 0 ? imagesMain?.[colorVersion]?.images : imagesMain?.[0]?.images;
  const selectedThumbnailImages = colors?.length > 0 ? imageThumbnails?.[colorVersion]?.images : imageThumbnails?.[0]?.images;


  // const priceFixed = price.toFixed(2)

  function addToCartHandler() {
    const newItem = { _id:id, img: colors?.length > 0 ? imageThumbnails[colorVersion[0]]?.images[0] : imageThumbnails[0].images[0], name, price, qty, countInStock, discount, colorVersion:colors[Number(colorVersion)]};

    dispatch(setCartItems(newItem));
    setQty(0)
  };

  const scaleRate = (zoomValue - 1) * (5 - 1) / (100 - 1) + 1;

  const imageStyle = {
    transform: `scale(${scaleRate})`
  }


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
      {isLoading ? 
        <Loader /> : errMessage ? <Alert message={errMessage} type='error'/>
       : (
        <div className="product-display-wrapper">
            <div className={`product-detail-image-wrapper ${isZoomed ? 'zoomed' : ''}`}
              //onClick={() => setLightboxIsOpen(true)}
            >
            <img src={selectedImages?.[activeImage]} alt="main product" style={imageStyle} />
              <div className='zoom-slider-container'>
                <input type="range" name="" id="" min='1' max='100' value={zoomValue} onChange={(e)=>setZoomValue(e.target.value)} className='zoom-slider'/>
              </div>
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