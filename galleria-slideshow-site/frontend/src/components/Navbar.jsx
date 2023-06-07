import logo from '../assets/shared/logo.svg';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar-inner">
        <img className='logo' src={logo} alt='logo' />
        <button className='btn'>Start Slideshow</button>
      </nav>
    </div>
  )
};

export default Navbar