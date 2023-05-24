import logo from '../images/logo.svg';
import IconGithub from './IconGithub';
import IconTwitter from './IconTwitter';
import IconLinkedIn from './IconLinkedIn';
import IconLogo from './IconLogo';

const Navbar = ({ version }) => {

  if (version === 'navbar-header') {
    return (
      <div className="container">
        <nav className={`navbar ${version}`} >
          <div className="logo">
            <IconLogo version={version} />
          </div>
          <ul className={`menu ${version}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">Contact Me</a></li>
          </ul>
        </nav>
      </div>
    )
  } else {
    return (
      <nav className="navbar" >
        <div className="container">
          <div className="navbar-footer-wrapper">
        <div className="logo-menu-wrapper">
          <IconLogo version={version}/>
          <ul className='menu'>
            <li><a href="/">Home</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">Contact Me</a></li>
          </ul>
        </div>
        <ul className="social-links">
          <li><a href="/"><IconGithub version={version} /></a></li>
          <li><a href="/"><IconTwitter version={version} /></a></li>
          <li><a href="/"><IconLinkedIn version={version} /></a></li>
            </ul>
            </div>
          </div>
      </nav>
    )
  };



    
  
};

export default Navbar