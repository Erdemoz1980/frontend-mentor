import galleryData from '../gallery-data.json';
import Thumbnail from '../components/Thumbnail';

const Homepage = () => {
  return (
    <div className='main-page-masonry'>
      {
        galleryData.map(item => (
          <Thumbnail key={item.id} {...item} />
        ))
      }
    </div>
  )
}

export default Homepage