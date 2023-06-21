import logo from '../images/logo.svg';
import avatar from '../images/image-avatar.png';
import cart from '../images/icon-cart.svg';

const Navbar = () => {
  return (
    <nav className="navbar-wrapper container">
      <div className="navbar-brand">
         <div className="logo-wrapper">
        <img src={logo} alt="logo" />
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
        <div className="cart-wrapper">
          <img src={cart} alt="cart" />
        </div>

        <div className="avatar-wrapper">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
     


    </nav>
  )
}

export default Navbar