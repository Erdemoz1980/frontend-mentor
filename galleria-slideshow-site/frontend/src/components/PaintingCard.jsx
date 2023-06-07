import { useParams } from 'react-router-dom';
import galleryData from '../gallery-data.json';

const PaintingCard = () => {
  const params = useParams();
  

  const painting = galleryData.find(item => item.id.toString() === params.id);
  const { title, artist, year, artistImg, galleryImg, description, source } = painting;
   
  return (
    <div className='painting-card'>
     
          <div className="gallery-img-container">
            <img src={galleryImg} alt="gallery img" className='gallery-image' />
            <div className="gallery-title-container">
              <h1>{title}</h1>
              <p className="subhead1">{artist}</p>
            </div>
            <img src={artistImg} alt="artist" className='artist-image' />
          </div>

      <div className="description-container">
        <p className="display">{year}</p>
        <p>{description}</p>
        <a href={source} target='_blank' rel="noreferrer noopener">Go to Source</a>
      </div>
        
  
   
    </div>
  )
}

export default PaintingCard;