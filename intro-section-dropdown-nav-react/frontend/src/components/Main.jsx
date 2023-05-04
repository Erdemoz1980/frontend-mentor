import imageHero from '../images/image-hero-desktop.png';
import audiophilelogo from '../images/client-audiophile.svg';
import databizLogo from '../images/client-databiz.svg';
import meetLogo from '../images/client-meet.svg';
import makerLogo from '../images/client-maker.svg';

const Main = () => {
  return (
    
        <div className="main-section-grid">
      <section className="section-left">
        <div className="section-left-body">
          <div className="main-title">
              <h1>Make</h1>
             <h1>remote work</h1>
          </div>
            <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <button className="btn btn-dark">Learn more</button>
          </div>
            <div className="clients">
              <img src={databizLogo} alt="databiz" />
              <img src={audiophilelogo} alt="audiophile" />
              <img src={meetLogo} alt="meetlogo" />
              <img src={makerLogo} alt="makerLogo" />
            </div>
      
          </section>
          <section className="section-right">
            <img className='image-hero' src={imageHero} alt='hero' />
          </section>
        </div>  

  )
};

export default Main