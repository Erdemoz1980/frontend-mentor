import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';

const Navbar = ({ isSlideShowOn, startStopSlideShow, setIsSlideShowOn, setCurrentIndex }) => {
  
  const onClickHandler = () => {
    setCurrentIndex(0)
    setIsSlideShowOn(false)
  }

  return (
    <div className="navbar-wrapper">
      <nav className="navbar-inner">
        <Link onClick={onClickHandler} to='/'>
          <div className="navbar-logo-container">
            <img className='logo' src={logo} alt='logo' />
          </div>
          </Link>
        <button className='btn btn-primary' onClick={startStopSlideShow} >{`${isSlideShowOn ? 'Stop Slideshow' : 'Start Slideshow'}`}</button>
      </nav>
    </div>
  )
};

export default Navbar