import { Link } from 'react-router-dom';
import profileImage from '../images/homepage/desktop/image-homepage-profile.jpg';
import profileImage2 from '../images/homepage/desktop/profile-erdem-2.jpg';

const About = ({sectionRef}) => {

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="profile-image-wrapper">
        <img className='profile-image' src={profileImage2} alt="profile" />
        <div className="profile-image-overlay"></div>
      </div>
      <div className="about-text-wrapper">
        <h2>About Me</h2>
        <p className='about-me'>
          I'm a React Front End developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. I'm based in Toronto, Canada, but I'm happy working remotely and have experience in remote teams. When I'm not coding, you'll find me outdoors. I love being out in nature whether that's going for a run, playing tennis or cycling. I'd love you to check out my work.</p>
          <Link to='/portfolioindex'><button className="btn btn-secondary">Go to Portfolio</button></Link> 
      </div>
     
    </section>
  )
};

export default About