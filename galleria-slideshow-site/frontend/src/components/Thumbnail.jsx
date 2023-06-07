
const Thumbnail = ({ thumbnail, title, artist }) => {
  return (
    <div className='thumbnail-body'>
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