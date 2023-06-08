import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import galleryData from '../gallery-data.json';
import CardNav from './CardNav';

const PaintingCard = () => {
  const [disabled, setDisabled] = useState({ back: false, next: false });
  const params = useParams();
  const navigate = useNavigate();

  const painting = galleryData.find(item => item.id.toString() === params.id);
  const { title, artist, year, artistImg, heroLg, description, source } = painting;
 
  const currentIndex = galleryData.indexOf(painting);
  const percentage = ((currentIndex + 1) / galleryData.length) * 100;

  useEffect(() => {
    if (currentIndex === 0) {
      setDisabled({back:true, next:false})
    } else if (currentIndex === galleryData.length - 1) {
      setDisabled({back:false, next:true})
    }
  },[currentIndex, setDisabled])

  const navigateNext = () => {
    if (currentIndex === galleryData.length - 1) {
      setDisabled(prevState=>({...prevState, next:true}))
    } else {
      setDisabled({back:false, next: false })
      navigate(`/painting/${galleryData[currentIndex+1].id}`)
    } 
  }

  const navigateBack = () => {
    if (currentIndex === 0) {
      setDisabled(prevState => ({ ...prevState, back: true }))
    } else {
      setDisabled({back: false, next:false });
      navigate(`/painting/${galleryData[currentIndex - 1].id}`)
    }
  };

  return (
    <div className='painting-card-wrapper'>
          <div className="painting-card-body">
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
          <a className='source' href={source} target='_blank' rel="noreferrer noopener">Go to Source</a>
        </div>
        <CardNav {...painting} percentage={percentage} navigateBack={navigateBack} navigateNext={navigateNext} disabled={disabled} />
      </div>
  )
}

export default PaintingCard;