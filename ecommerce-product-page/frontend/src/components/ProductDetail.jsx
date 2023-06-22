import { useState } from 'react';
import IconCart from './IconCart';
import IconMinus from './IconMinus';
import IconPlus from './IconPlus';
import ShoppingCart from './ShoppingCart';

const ProductDetail = ({ id, company, name, description, price, discount, imageThumbnails, imagesMain, cartItems, setCartItems }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(0);

  price = price.toFixed(2)

  function addToCartHandler() {
    setCartItems(prevCartItems => [...prevCartItems, { id, qty, name, img: imageThumbnails[0], price, totalPrice: (qty * price).toFixed(2) }])
    setQty(0);
  }

  return (
    <div className="product-page-wrapper container">
      <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />
      <div className="product-display-wrapper">
        <div className="product-main-image-wrapper">
          <img src={imagesMain[activeImage]} alt="main product" />
        </div>
        <div className="product-thumbnails">
          {
            imageThumbnails.map((thumbnail, index) => (
              <div key={index} className={`thumbnail-wrapper ${activeImage === index ? 'active' : ''}`} onClick={() => setActiveImage(index)}>
                <img src={thumbnail} alt="thumbnail" />
              </div>
            ))
          }
        </div>
      </div>
      <div className="product-info-wrapper">
        <h4 className='company-name'>{company}</h4>
        <h1 className='product-name text-dark'>{name}</h1>
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
            <button className='btn btn-qty' onClick={() => setQty(prevState => prevState + 1)}>
              <IconPlus />
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