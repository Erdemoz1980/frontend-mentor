import homepageHero from '../images/homepage/desktop/image-homepage-hero.jpg';

const Hero = ({handleScroll}) => {
  return (
    <section className='hero-section'>
      <div className="hero-image">
        <img src={homepageHero} alt="hero" />
        <div className="text-box">
          <h1 className="main-title">Hey, I'm Erdem Oz and I love building beatiful websites.</h1>
          <button className="btn btn-primary btn-arrow" onClick={handleScroll} >About Me</button>
        </div>
      </div>
    </section>
  )
}

export default Hero