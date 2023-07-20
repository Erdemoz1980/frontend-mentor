import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCartItem } from '../slices/cartSlice';
import useQtyChange from '../hooks/useQtyChange';
import trashIcon from '../images/icon-delete.svg';

const CheckoutPage = () => {
  const { cartItems } = useSelector(state => state.cart)

  const dispatch = useDispatch()

  const handleQtychange = useQtyChange(cartItems);

  return (
    <div className='container checkout-page-wrapper'>
      <h1>Place Order</h1>
      <h2>My Cart</h2>
      <section className="checkout-items-wrapper">
        <header className="checkout-header">
          <div className="checkout-header-title">
            <h3>Item</h3>
          </div>
          <div className="checkout-header-title">
            <h3>Price</h3>
          </div>
          <div className="checkout-header-title">
            <h3>Qty</h3>
          </div>
          <div className="checkout-header-title">
            <h3>Amount</h3>
          </div>
        </header>
        {
          cartItems.map(item => (
            <div className='checkout-item-wrapper' key={item._id}>
              <div className="checkout-item">
                <Link to={`/product/${item._id}`}>
                <img src={item.img} alt='checkout item'/>
                </Link>
                <p>{item.name}</p>
              </div>
              <div className="checkout-item">
                <p>${item.price.toFixed(2)}</p>
              </div>
              <div className="checkout-item">
                <select value={item.qty} onChange={(e) => handleQtychange(item.id, Number(e.target.value))}>
                  {Array.from({ length: item.countInStock }).map((_, index) => (
                    <option key={index} value={index + 1}>{index + 1}</option>
                  ))}
                </select>
              </div>
              <div className="checkout-item"><p>${((item.qty) * (item.price)).toFixed(2)}</p></div>
              <div className="cart-trash-container">
                <button className="btn" onClick={() => dispatch(deleteCartItem(item.id))}>
                  <div className="cart-delete-img-container">
                    <img src={trashIcon} alt='trash' />
                  </div>
                </button>
              </div>
            </div>
          ))
        }
      </section>
    </div>
  )
};

export default CheckoutPage