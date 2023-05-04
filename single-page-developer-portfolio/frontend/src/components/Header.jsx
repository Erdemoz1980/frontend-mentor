import gitIcon from '../assets/images/icon-github.svg';
import frontEndIcon from '../assets/images/icon-frontend-mentor.svg';
import linkedinIcon from '../assets/images/icon-linkedin.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h3>erdemoz</h3>
        <div className="profile">
          <img src={gitIcon} alt="github" />
          <img src={frontEndIcon} alt="frontend Mentor" />
          <img src={linkedinIcon} alt="linkedin" />
          <img src={twitterIcon} alt="github" />
        </div>
      </nav>

      <div className="hero">
        <h1 className='main-title'>Nice to meet you!</h1>
        <h1>I'm Erdem Oz.</h1>
        <p>Based in Toronto, Canada, I' a front-end developer passionate about building dynamic, exciting and accessible web apps that users love. </p>

        <a href="/" className="hero-cta">Contact Me</a>
      </div>
    </header>
  )
}

export default Header