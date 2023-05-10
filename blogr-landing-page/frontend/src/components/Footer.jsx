import logo from '../images/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <img src={logo} alt='company logo' className='logo' />
       
        <nav className="footer-nav">
          <ul>
            <li><a href="/">Product</a></li>
            <li><a href="/">Overview</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Marketplace</a></li>
            <li><a href="/">Integrations</a></li>
          </ul>
          <ul>
            <li><a href="/">Company</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Team</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Careers</a></li>
          </ul>
          <ul>
            <li><a href="/">Connect</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Newsletter</a></li>
            <li><a href="/">LinkedIn</a></li>
          </ul>
        </nav>
      </div>


    </footer>
  )
}

export default Footer