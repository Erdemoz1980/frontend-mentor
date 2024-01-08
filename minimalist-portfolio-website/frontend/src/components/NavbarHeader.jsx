import { useState } from 'react';
import { Link } from 'react-router-dom';
import IconLogo from "./IconLogo";
import HamburgerIcon from './HamburgerIcon';
import CloseIcon from './CloseIcon';

const NavbarHeader = ({ version, activePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className={`container navbar ${version}`} >
        <div className="logo">
          <Link to='/'><IconLogo version={version} /></Link>
        </div>
        {!isOpen && <HamburgerIcon setIsOpen={setIsOpen} />}
        {isOpen && <div className="mobile-menu-close-button" onClick={() => setIsOpen(false)}>
          <CloseIcon setIsOpen={setIsOpen} />
        </div>}
        {isOpen && (
          <div className="nav-mobile-wrapper">
            <ul className='nav-mobile menu'>
              <li><Link to='/' className={activePage === '/' ? 'active-nav-link' : ''}>Home</Link></li>
              <li><Link to='/portfolioindex' className={activePage === '/portfolioindex' ? 'active-nav-link' : ''}>Portfolio</Link></li>
              <li><Link to='/contact' className={activePage === '/contact' ? 'active-nav-link' : ''}>Contact Me</Link></li>
            </ul>
          </div>
        )}
        <ul className={`nav-desktop-tablet menu ${version}`}>
          <li><Link to='/' className={activePage === '/' ? 'active-nav-link' : ''}>Home</Link></li>
          <li><Link to='/portfolioindex' className={activePage === '/portfolioindex' ? 'active-nav-link' : ''}>Portfolio</Link></li>
          <li><Link to='/contact' className={activePage === '/contact' ? 'active-nav-link' : ''}>Contact Me</Link></li>
        </ul>
     
      </nav>
   
  )
};

export default NavbarHeader