import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { setCartItems } from '../slices/cartSlice';
import IconCart from './IconCart';
import IconMinus from './IconMinus';
import IconPlus from './IconPlus';
import ShoppingCart from './ShoppingCart';
import Lightbox from './Lightbox';
import data from '../data.json';

const ProductDetail = () => {
  const [qty, setQty] = useState(0)
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  
  const { isCartOpen } = useSelector(state => state.cart)
  
  const dispatch = useDispatch()
  const { id, colorVersion } = useParams()
  const numericId = Number(id)
  
  const { company, name, description, price, countInStock, discount, colors, imageThumbnails, imagesMain }
    = data.find(item => item.id === numericId);

  // const priceFixed = price.toFixed(2)

  function addToCartHandler() {
    const newItem = { id: numericId, img: colors ? imageThumbnails[colors[0]][0] : imageThumbnails[0], name, qty, price, countInStock, discount };
    dispatch(setCartItems(newItem));
    setQty(0)
  };

  return (
    <div className="product-page-wrapper container">
      {lightboxIsOpen && <Lightbox imagesMain={imagesMain} imageThumbnails={imageThumbnails} colors={colors} colorVersion={colorVersion} setLightboxIsOpen={setLightboxIsOpen} lightboxIsOpen={lightboxIsOpen} activeImage={activeImage} setActiveImage={setActiveImage} />}
      {isCartOpen && <ShoppingCart qty={qty} setQty={setQty} />}
      <div className="product-display-wrapper">
        <div className="product-main-image-wrapper" onClick={() => setLightboxIsOpen(true)}>
          <img src={colors.length > 1 ? imagesMain[colorVersion].images[activeImage] : imagesMain[activeImage]} alt="main product" />
        </div>
        <div className="product-thumbnails">
          {
            colors.length > 0 ? imageThumbnails[colorVersion].images.map((thumbnail, index) => (
              <div key={index} className={`thumbnail-wrapper ${activeImage === index ? 'active' : ''}`} onClick={() => setActiveImage(index)}>
                <img src={thumbnail} alt="thumbnail" />
              </div>
            )) : imageThumbnails.map((thumbnail, index) => (
              <div key={index} className={`thumbnail-wrapper ${activeImage === index ? 'active' : ''}`} onClick={() => setActiveImage(index)}>
                <img src={thumbnail} alt="thumbnail" />
              </div>
            ))
          }
        </div>
      </div>
      <div className="product-info-wrapper">
        <h4 className='company-name'>{company}</h4>
        <h1 className='product-name text-large text-dark'>{name}</h1>
        <p className="product-description">{description}</p>
        <div className="price-wrapper">
          <h2 className='product-price text-dark'>${`${discount ? (price - (price * (discount / 100))).toFixed(2) : price}`}{discount && <span className='discount-tab'>{discount}%</span>}</h2>
          {discount && <small className='original-price text-light'>${price}</small>}
        </div>
        <div className="cart-control-wrapper">
          <div className="qty-wrapper">
            <button className='btn btn-qty' disabled={qty === 0} onClick={() => setQty(prevState => prevState - 1)}>
              <IconMinus disabled={qty === 0} />
            </button>
            <p className='qty-info text-dark'>{qty}</p>
            <button className='btn btn-qty' disabled={qty >= countInStock} onClick={() => setQty(prevState => prevState + 1)}>
              <IconPlus disabled={qty >= countInStock} />
            </button>
          </div>
          <button className="btn btn-primary" disabled={qty === 0} onClick={addToCartHandler}>
            <IconCart type='primary' />
            Add to cart</button>
        </div>
      </div>
    </div>
  )
};

export default ProductDetail