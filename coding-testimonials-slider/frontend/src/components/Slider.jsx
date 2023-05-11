import imageTanya from '../images/image-tanya.jpg';
import imageJohn from '../images/image-john.jpg';
import iconNext from '../images/icon-next.svg';
import iconPrev from '../images/icon-prev.svg';

const Slider = () => {
  return (
    <div className='slider-wrapper'>
      

      <div className="slider-card">
        <div className="card-text-container">
          <h1 className="slider-text">
            “ I've been interested in coding for a while but never taken the jump, until now.
            I couldn't recommend this course enough. I'm now in the job of my dreams and so
            excited about the future. ”
          </h1>
          <p className="slider-bio">
            <span>Tony Sinclair</span> UX Engineer
          </p>
        </div>
        <div className="card-profile-wrapper">
          <div className="card-image-wrapper">
             <img className='profile-image'src={imageTanya} alt="tanya profile" />
          <button className="slider-btn">
            <img className='prev' src={iconPrev} alt="prev arrow" />
            <img className='next' src={iconNext} alt="next arrow" />
          </button>
          </div>
         
        </div>
      </div>
 

      

    </div>
  )
};

export default Slider