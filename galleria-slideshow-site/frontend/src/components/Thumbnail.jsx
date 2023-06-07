import { useNavigate } from 'react-router-dom';

const Thumbnail = ({ id, thumbnail, title, artist }) => {
  const navigate = useNavigate();

  return (
    <div className='thumbnail-body' onClick={()=>navigate(`/painting/${id}`)}>
      <div className="thumbnail-image-container">
        <img src={thumbnail} alt='thumbnail' className='thumbnail-image' />
      </div>
      <div className="thumbnail-text-overlay">
        <h2>{title}</h2>
        <p>{artist}</p>
      </div>
    </div>
  )
};

export default Thumbnail