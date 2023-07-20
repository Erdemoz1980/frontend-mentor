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
    <div className="container checkout-page-wrapper">
      <h1>Place Order</h1>
      <h2>My Cart</h2>

      <table>
        <thead>
          <tr className='checkout-header'>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length < 1 ? (
            <tr>
              <th>Your cart is empty</th>
            </tr>) : (
              cartItems.map(item => (
                <tr className='checkout-item-row'>
                  <td>
                    <Link to={`/product/${item._id}`}><img src={item.img} alt='cart item' /></Link>
                    <Link to={`/product/${item._id}`}><p>{item.name}</p></Link>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <select value={item.qty} onChange={(e) => handleQtychange(item._id, Number(e.target.value))}>
                      {Array.from({ length: item.countInStock }).map((_, index) => (
                        <option key={index} value={index + 1}>{index+1}</option>
                      ))}
                    </select>
                  </td>
                  <td>${((item.qty)*(item.price)).toFixed(2) }</td>
                  <td>
                    <button className='btn' onClick={()=>dispatch(deleteCartItem(item._id))}>
                      <img className='cart-item-delete' src={trashIcon} alt="trash icon" />
                    </button>
                  </td>
                </tr>
              ))
            )}
        </tbody>
      </table>
   
 </div>
           
  )
};

export default CheckoutPage