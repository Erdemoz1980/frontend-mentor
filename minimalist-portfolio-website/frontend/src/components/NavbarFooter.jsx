import { Link } from 'react-router-dom';
import IconGithub from "./IconGithub"
import IconTwitter from "./IconTwitter"
import IconLinkedIn from "./IconLinkedIn"
import IconLogo from "./IconLogo"

const NavbarFooter = ({version, activePage}) => {
  return (
    <nav className="navbar" >
    <div className="container">
      <div className="navbar-footer-wrapper">
    <div className="logo-menu-wrapper">
      <Link to='/'><IconLogo version={version}/></Link>  
      <ul className='menu'>
        <li><Link to='/' className={activePage==='/' ? 'active-nav-link' : ''}>Home</Link></li>
        <li><Link to='/portfolioindex' className={activePage==='/portfolioindex' ? 'active-nav-link' : ''}>Portfolio</Link></li>
        <li><Link to='/contact' className={activePage==='/contact' ? 'active-nav-link' : ''}>Contact Me</Link></li>
      </ul>
    </div>
    <ul className="social-links">
      <li><a href="https://github.com/Erdemoz1980" target='_blank' rel='noopener noreferrer'><IconGithub version={version}/></a></li>
      <li><a href="https://twitter.com/ErdemOz1980" target='_blank' rel='noopener noreferrer' ><IconTwitter version={version} /></a></li>
      <li><a href="https://www.linkedin.com/in/erdem-ozdemir-95148553/" target='_blank' rel='noopener noreferrer'><IconLinkedIn version={version} /></a></li>
        </ul>
        </div>
      </div>
  </nav>
  )
}

export default NavbarFooter