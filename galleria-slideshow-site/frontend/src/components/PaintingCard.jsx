import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import galleryData from '../gallery-data.json';
import CardNav from './CardNav';
import iconViewImage from '../assets/shared/icon-view-image.svg';

const PaintingCard = ({setIsOpen, setCurrentIndex}) => {
  const params = useParams()
  const navigate = useNavigate()

  const painting = galleryData.find(item => item.id.toString() === params.id);
  const { title, artist, year, artistImg, heroLg, description, source } = painting;
 
  const currentIndex = galleryData.indexOf(painting);
  const percentage = ((currentIndex + 1) / galleryData.length) * 100;

  useEffect(() => {
    setCurrentIndex(currentIndex)
  }, [currentIndex, setCurrentIndex]);

  const navigateNext = () => {
    if (currentIndex === galleryData.length - 1) {
      return null;
    } else {
      navigate(`/painting/${galleryData[currentIndex+1].id}`)
    } 
  }

  const navigateBack = () => {
    if (currentIndex === 0) {
      return null
    } else {
      navigate(`/painting/${galleryData[currentIndex - 1].id}`)
    }
  };

  return (
    <div className='painting-card-wrapper'>
      <div className="painting-card-body">
        <button onClick={()=>setIsOpen(true)} className="btn view-image-btn">
        <img src={iconViewImage} alt="view icon" />
          <p className="subhead3">View Image</p>
        
        </button>
          <div className="card-img-container">
            <img src={heroLg} alt="gallery img" className='gallery-image' />
            <div className="gallery-title-container">
              <h1>{title}</h1>
              <p className="subhead1">{artist}</p>
            </div>
        </div>
        <div className="artist-image-container">
            <img src={artistImg} alt="artist" className='artist-image' />
            </div>
        <p className="display">{year}</p>
        <div className="description-container">
          <p>{description}</p>
        </div>
          <a className='source-link' href={source} target='_blank' rel="noreferrer noopener">Go to Source</a>
        </div>
      <CardNav {...painting} percentage={percentage} navigateBack={navigateBack} navigateNext={navigateNext} disabled={{ previous: currentIndex === 0, next:currentIndex===galleryData.length-1 }} />
      </div>
  )
}

export default PaintingCard;