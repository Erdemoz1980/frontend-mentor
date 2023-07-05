import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCartIsOpen } from '../slices/cartSlice';
import logo from '../images/logo.svg';
import avatar from '../images/image-avatar.png';
import cartIcon from '../images/icon-cart.svg';
import ShoppingCart from './ShoppingCart';

const Navbar = () => {
  const { cartItems, isCartOpen} = useSelector(state => state.cart);
  const cartItemsQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const dispatch = useDispatch();

  return (
    <nav className="navbar-wrapper container">
      <div className="navbar-brand">
        <div className="logo-wrapper">
          <Link to='/'>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="navbar-menu">
          <li><a href="/collections">Collections</a></li>
          <li><a href="/men">Men</a></li>
          <li><a href="/women">Women</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="navbar-user">
      {isCartOpen && <ShoppingCart/>}
        <div className="cart-icon-wrapper">
          <button className="btn" onClick={() => dispatch(setCartIsOpen(!isCartOpen))}>
            <img src={cartIcon} alt='cart' />
            {cartItems.length > 0 && <div className='cart-qty-display'>{cartItemsQty}</div>}
          </button>
        </div>
        <div className="avatar-wrapper">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </nav>
  )
};

export default Navbar