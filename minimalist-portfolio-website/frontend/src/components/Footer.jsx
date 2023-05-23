import Navbar from "./Navbar";
import github from '../images/icons/github.svg';
import twitter from '../images/icons/twitter.svg';
import linkedin from '../images/icons/linkedin.svg';

const Footer = () => {
  return (
    <footer>
      <Navbar />
      <ul className="social-links">
        <li><a href="/"><img src={github} alt="github"/></a></li>
        <li><a href="/"><img src={twitter} alt="twitter"/></a></li>
        <li><a href="/"><img src={linkedin} alt="linkedin"/></a></li>
      </ul>
    </footer>
  )
}

export default Footer