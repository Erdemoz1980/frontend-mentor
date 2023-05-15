import gitIcon from '../assets/images/icon-github.svg';
import frontEndIcon from '../assets/images/icon-frontend-mentor.svg';
import linkedinIcon from '../assets/images/icon-linkedin.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import profileImage from '../assets/images/image-profile-desktop.webp';
import patternCircle from '../assets/images/pattern-circle.svg';
import patternRings from '../assets/images/pattern-rings.svg';

const Header = () => {
  return (
    <header className="header border">
      {/*
      <div className="ring-pattern-container">
         <img src={patternRings} alt='ring pattern' />
      </div>
  */}
     
      <nav className="navbar">
        <h3 className='logo'>erdemoz</h3>
        <div className="profile-links">
          <img src={gitIcon} alt="github" />
          <img src={frontEndIcon} alt="frontend Mentor" />
          <img src={linkedinIcon} alt="linkedin" />
          <img src={twitterIcon} alt="github" />
        </div>
      </nav>
      <div className="hero">
        <h1 className='main-title'>Nice to meet you!</h1>
        <h1 className='main-title'>I'm <span>Erdem Oz.</span> </h1>
        <p>Based in Toronto, Canada, I'm a front-end developer passionate about building accessible web apps that users love. </p>

        <a href="/" className="btn">Contact Me</a>
      </div>
      <div className='profile-image-container'>
        <img className="profile-image" src={profileImage} alt="profile" />
       <img className='circle-pattern' src={patternCircle} alt='circle pattern' />
      </div>
     
    </header>
  )
}

export default Header