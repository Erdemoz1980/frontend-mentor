import logo from '../images/logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar" >
    <div className="logo">
      <img className='logo' src={logo} alt='logo' />
    </div>
    <ul className='menu'>
      <li><a href="/">Home</a></li>
      <li><a href="/">Portfolio</a></li>
      <li><a href="/">Contact Me</a></li>
    </ul>
  </nav>

  )
}

export default Navbar