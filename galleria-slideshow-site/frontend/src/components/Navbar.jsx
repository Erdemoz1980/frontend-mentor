import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';

const Navbar = ({ isSlideShowOn, startStopSlideShow, setCurrentIndex }) => {
  
  const onClickHandler = () => {
    setCurrentIndex(0)
    startStopSlideShow()
  }

  return (
    <div className="navbar-wrapper">
      <nav className="navbar-inner">
        <Link onClick={onClickHandler} to='/'><img className='logo' src={logo} alt='logo'/></Link> 
        <button className='btn' onClick={startStopSlideShow} >{`${isSlideShowOn ? 'Stop Slideshow' : 'Start Slideshow'}`}</button>
      </nav>
    </div>
  )
};

export default Navbar