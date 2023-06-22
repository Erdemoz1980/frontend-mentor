import trashIcon from '../images/icon-delete.svg';

const ShoppingCart = ({ cartItems, setCartItems }) => {

  const handleDeleteItem = (id) => {
    setCartItems(prevCartItems=>prevCartItems.filter(item=>item.id!==id))
  }
  
  return (
    <div className="cart-wrapper">
      <h3 className="cart-title">Cart</h3>
      { cartItems.length < 1 ? <p className='cart-notification'>Your cart is empty</p> : cartItems.map(item => (
        <div key={item.id}>
          <div className="cart-item-details-wrapper">
            <div className="cart-item-image-wrapper">
              <img src={item.img} alt='cart item' />
            </div>
            <div className="cart-item-info">
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-price">${item.price} x {item.qty} = <span>${(item.price*item.qty).toFixed(2)}</span></p>
            </div>
            <button className="btn" onClick={()=>handleDeleteItem(item.id)}>
              <img src={trashIcon} alt='trash'/>
            </button>
          </div>
          <button className="btn btn-primary btn-block">Checkout</button>
        </div>
    ))}
    </div>
  )
}

export default ShoppingCart