import { useParams } from 'react-router-dom';
import galleryData from '../gallery-data.json';
import CardNav from './CardNav';

const PaintingCard = () => {
  const params = useParams();
  

  const painting = galleryData.find(item => item.id.toString() === params.id);
  const { title, artist, year, artistImg, heroLg, description, source } = painting;
 
  const percentage = (galleryData.indexOf(painting) + 1) / galleryData.length * 100;



   
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
        <CardNav {...painting} percentage={percentage} />
      </div>
  )
}

export default PaintingCard;