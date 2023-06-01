import { Link } from 'react-router-dom';
import IconLogo from "./IconLogo";

const NavbarHeader = ({version, activePage}) => {
  return (
    <div className="container">
    <nav className={`navbar ${version}`} >
      <div className="logo">
       <Link to='/'><IconLogo version={version}/></Link> 
      </div>
      <ul className={`menu ${version}`}>
        <li><Link to='/' className={activePage==='/' ? 'active-nav-link' : ''}>Home</Link></li>
        <li><Link to='/portfolioindex' className={activePage==='/portfolioindex' ? 'active-nav-link' : ''}>Portfolio</Link></li>
        <li><Link to='/contact' className={activePage==='/contact' ? 'active-nav-link' : ''}>Contact Me</Link></li>
      </ul>
    </nav>
  </div>
  )
}

export default NavbarHeader