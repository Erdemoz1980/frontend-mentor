import Thumbnail from '../components/Thumbnail';

const Homepage = ({galleryData}) => {
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