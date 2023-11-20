import { Link } from "react-router-dom";


const MobileMenu = ({ navItems, keyword, location }) => {
 

  return (
 
    <ul className="mobile-navbar-menu">
        <div className="close-icon-wrapper"></div>
        {navItems.map(navItem => (
          <li key={navItem.id}><Link className={`${keyword && keyword === navItem.label.toLowerCase() ? 'current-nav' : (location.pathname === navItem.to ? 'current-nav' : '')}`} to={navItem.to}>{navItem.label}</Link></li>
        ))}
      </ul>


  )
}

export default MobileMenu