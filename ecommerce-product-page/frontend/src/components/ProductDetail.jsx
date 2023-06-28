import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { setCartItems, setActiveImage, setLightBox } from '../slices/cartSlice';
import IconCart from './IconCart';
import IconMinus from './IconMinus';
import IconPlus from './IconPlus';
import ShoppingCart from './ShoppingCart';
import data from '../data.json';

const ProductDetail = () => {
  const [qty, setQty] = useState(0);
  const { isCartOpen, activeImage } = useSelector(state => state.cart);
  
  const dispatch = useDispatch()
  const { id } = useParams()
  const numericId = Number(id)
  
  const { company, name, description, price, countInStock, discount, imageThumbnails, imagesMain }
  = data.find(item => item.id === numericId);


  // const priceFixed = price.toFixed(2)

  function addToCartHandler() {
    const newItem = { id:numericId, img: imageThumbnails[0], name, qty, price, countInStock, discount };
    dispatch(setCartItems(newItem));
    setQty(0)
  };

  return (
    <div className="product-page-wrapper container">
      {isCartOpen && <ShoppingCart qty={qty} setQty={setQty} />}
      <div className="product-display-wrapper">
        <div className="product-main-image-wrapper" onClick={()=>dispatch(setLightBox({isOpen:true, id:numericId}))}>
          <img src={imagesMain[activeImage]} alt="main product" />
        </div>
        <div className="product-thumbnails">
          {
            imageThumbnails.map((thumbnail, index) => (
              <div key={index} className={`thumbnail-wrapper ${activeImage === index ? 'active' : ''}`} onClick={() => dispatch(setActiveImage(index))}>
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
            <button className='btn btn-qty' disabled={qty>=countInStock} onClick={() => setQty(prevState => prevState + 1)}>
              <IconPlus disabled={qty>=countInStock} />
            </button>
          </div>
          <button className="btn btn-primary" disabled={qty === 0} onClick={addToCartHandler}>
            <IconCart type='primary'/>
            Add to cart</button>
        </div>
      </div>
    </div>
  )
};

export default ProductDetail