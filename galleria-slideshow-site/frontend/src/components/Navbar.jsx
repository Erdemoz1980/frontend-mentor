import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar-inner">
        <Link to='/'><img className='logo' src={logo} alt='logo'/></Link> 
        <button className='btn'>Start Slideshow</button>
      </nav>
    </div>
  )
};

export default Navbar