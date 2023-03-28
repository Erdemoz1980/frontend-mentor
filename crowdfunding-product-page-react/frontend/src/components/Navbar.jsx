import logo from '../images/logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar" >
      <img src={logo} alt="company-logo" />
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Discover</a></li>
        <li><a href="#">Get Started</a></li>
      </ul>
    </nav>
  )
}

export default Navbar