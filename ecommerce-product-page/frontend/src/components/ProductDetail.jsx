import { useState } from 'react';
import iconMinus from '../images/icon-minus.svg';
import iconPlus from '../images/icon-plus.svg';
import iconCart from '../images/icon-cart.svg';

const ProductDetail = ({company, name, description, price, discount, imageThumbnails, imagesMain }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(0);

  function addToCartHandler() {
    
  }

  return (
    <div className="product-page-wrapper">

      <div className="product-display-wrapper">
        <div className="product-main-image-wrapper">
          <img src={imagesMain[activeImage]} alt="main product"/>
        </div>
        <div className="product-thumbnails">
          {
            imageThumbnails.map((thumbnail, index) => (
              <div key={index} className={`thumbnail-wrapper ${activeImage===index ? 'active' : ''}`} onClick={()=>setActiveImage(index)}>
                <img src={thumbnail} alt="thumbnail"/>
              </div>
            ))
          }
        </div>
      </div>

      <div className="product-info-wrapper">
        <h4 className='company-name'>{company}</h4>
        <h1 className='product-name'>{name}</h1>
        <p className="product-description">{description}</p>
        <div className="price-wrapper">
          <h2 className='product-price'>${`${discount ? price-(price*(discount/100)) : price}`}</h2>{discount && <span className='discount-tab'>{discount}%</span>}
          {discount && <small className='original-price'>${price}</small>}
        </div>
        <div className="add-to-cart-wrapper">
          <div className="quantity-wrapper">
            <button className='btn btn-qty' disabled={qty===0} onClick={()=>setQty(prevState=>prevState-1)}>
              <img src={iconMinus} alt="decrease" />
            </button>
            <p className='qty'>{qty}</p>
            <button className='btn btn-qty' onClick={()=>setQty(prevState=>prevState+1)}>
              <img src={iconPlus} alt="increase" />
            </button>
          </div>
          <button className="btn btn-main" onClick={addToCartHandler}>
            <img src={iconCart} alt='cart'/>
            Add to cart</button>
        </div>
        
      </div>

    </div>
  )
}

export default ProductDetail