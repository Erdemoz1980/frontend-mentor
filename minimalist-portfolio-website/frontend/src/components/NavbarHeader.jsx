import { Link } from 'react-router-dom';
import IconLogo from "./IconLogo";

const NavbarHeader = ({version}) => {
  return (
    <div className="container">
    <nav className={`navbar ${version}`} >
      <div className="logo">
       <Link to='/'><IconLogo version={version}/></Link> 
      </div>
      <ul className={`menu ${version}`}>
        <li><Link to='/'><a href="/">Home</a></Link></li>
        <li><Link to='/portfolioindex'><a href="/">Portfolio</a></Link></li>
        <li><Link to='/contact'><a href="/">Contact Me</a></Link></li>
      </ul>
    </nav>
  </div>
  )
}

export default NavbarHeader