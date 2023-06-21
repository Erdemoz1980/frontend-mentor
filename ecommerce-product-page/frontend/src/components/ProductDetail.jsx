import { useState } from 'react';
import IconCart from './IconCart';
import IconMinus from './IconMinus';
import IconPlus from './IconPlus';

const ProductDetail = ({ company, name, description, price, discount, imageThumbnails, imagesMain }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(0);

  price = price.toFixed(2)

  function addToCartHandler() {
  }

  return (
    <div className="product-page-wrapper">
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
              <IconMinus disabled={qty===0} />
            </button>
            <p className='qty-info text-dark'>{qty}</p>
            <button className='btn btn-qty' onClick={() => setQty(prevState => prevState + 1)}>
             <IconPlus />
            </button>
          </div>
          <button className="btn btn-primary" onClick={addToCartHandler}>
            <IconCart type='primary' />
            Add to cart</button>
        </div>
      </div>
    </div>
  )
};

export default ProductDetail