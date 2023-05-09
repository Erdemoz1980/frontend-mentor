import logo from '../images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className='menu'>
            <img src={logo} alt='company logo' className='logo' />
            <ul className='main-menu'>
              <li><a href="/product">Product</a>
              </li>
              <li><a href="/company">Company</a></li>
              <li><a href="/connect" className='connect'>Connect
                <div className="dropdown-wrapper">
                  <div className="dropdown-wrapper">
                     <ul className="dropdown">
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/contact">Newsletter</a></li>
                    <li><a href="/contact">Linkedin</a></li>
                  </ul>
                  </div>
              </div>
              </a>
              </li>
            </ul>
          </div>
          <div className="buttons">
            <button className="btn">Login</button>
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </nav>
        <div className="header-body">
          <h1 className='main-title'>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
          <div className="buttons sm">
            <button className="btn btn-primary btn-sm">Start for Free</button>
          <button className="btn btn-border btn-sm border">Learn More</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header