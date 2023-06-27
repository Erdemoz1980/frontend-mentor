import { useDispatch, useSelector } from 'react-redux';
import { closeCart, deleteCartItem, setCartItems } from '../slices/cartSlice';
import trashIcon from '../images/icon-delete.svg';

const ShoppingCart = () => {
  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();

    const handleQtyChange = (e, itemId) => {
      const newQty = parseInt(e.target.value);
  
      const updatedCartItems = cartItems.map(item => {
        if (item.id === itemId) {
          return { ...item, qty: newQty };
        }
        return item;
      });
  
      dispatch(setCartItems(updatedCartItems));
    };

  return (
    <div className='cart-wrapper'>
      <div className="card-header">
        <h3 className="cart-title">Cart</h3>
        <button className="btn" onClick={()=>dispatch(closeCart())}>X</button>
      </div>
      {cartItems.length < 1 ? <p className='cart-notification'>Your cart is empty</p>
        : cartItems.map(item => (
        <div key={item.id}>
          <div className="cart-item-details-wrapper">
            <div className="cart-item-image-wrapper">
              <img src={item.img} alt='cart item' />
            </div>
            <div className="cart-item-info">
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-price">${item.discount ?
                ((item.price - (item.price * (item.discount / 100))).toFixed(2)) : item.price} x {item.qty} = <span>${item.discount ?
                ((item.price - (item.price * (item.discount / 100))) * item.qty).toFixed(2) : (item.price * item.qty).toFixed(2)}</span></p>
            </div>
            <button className="btn" onClick={()=>dispatch(deleteCartItem(item.id))}>
              <img src={trashIcon} alt='trash'/>
            </button>
          </div>
            <div className="stock-info-wrapper">
              <select name="" id="" value={item.qty} onChange={(e)=>handleQtyChange(e, item.id)} >
                {Array.from({ length: item.countInStock }).map((_, index) => (
                  <option key={index} value={index+1}>{index+1}</option>
                ) ) }
              </select>
          </div>
          <button className="btn btn-primary btn-block">Checkout</button>
        </div>
    ))}
    </div>
  )
}

export default ShoppingCart