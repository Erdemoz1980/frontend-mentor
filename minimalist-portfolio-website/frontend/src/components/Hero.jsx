import { useState } from 'react';
import homepageHero from '../images/homepage/desktop/image-homepage-hero.jpg';
import IconDownArrow from './IconDownArrow';

const Hero = ({ handleScroll }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className='hero-section'>
      <div className="hero-image">
        <img src={homepageHero} alt="hero" />
        <div className="text-box">
          <h1 className="main-title">Hey, I'm Erdem Oz and I love building beatiful websites.</h1>
          <button
            className="btn btn-primary"
            onClick={handleScroll}
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
          >
            <div className='arrow-icon-wrapper'>
            <IconDownArrow color={isHovered ? '#fff':'#5FB4A2'} />  
            </div>
            About Me
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero