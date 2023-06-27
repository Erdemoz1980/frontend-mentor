import { useSelector, useDispatch} from 'react-redux';
import { setLightBox, setActiveImage } from '../slices/cartSlice';
import IconPrevious from './IconPrevious';
import IconNext from './IconNext';
import IconClose from './IconClose';

const Lightbox = ({ data }) => {
  const dispatch = useDispatch();
  const { activeImage, lightbox } = useSelector(state => state.cart);

  const product = data.find(item => item.id === lightbox.id)

  const nextImageHandler = () => {
    if (activeImage > product.imagesMain.length - 2) {
      dispatch(setActiveImage(0))
    } else {
      dispatch(setActiveImage(activeImage + 1))
    }
  }

  const prevImageHandler = () => {
    if (activeImage === 0) {
      dispatch(setActiveImage(product.imagesMain.length-1))
    } else {
      dispatch(setActiveImage(activeImage-1))

    }
  }

  return (
    <div className={`lightbox-overlay ${lightbox.isOpen ? 'lightbox-open' : ''}`}>
      <div className="lightbox-img-wrapper">
        <img src={product && product.imagesMain[activeImage]} alt="active" />
        <div className="icon-prev-wrapper" onClick={prevImageHandler}>
          <IconPrevious />
        </div>
        <div className="icon-next-wrapper" onClick={nextImageHandler}>
          <IconNext />
        </div>
        <div className="icon-close-wrapper" onClick={()=>dispatch(setLightBox({...lightbox, isOpen:false}))}>
           <IconClose  />
        </div>
       
        <div className="lightbox-thumbnails-wrapper">
          {
            product && product.imageThumbnails.map((item, index) => (
              <div key={index} className={`lightbox-thumbnail-wrapper ${activeImage===index ? 'active' : ''}`} onClick={()=>dispatch(setActiveImage(index))}>
                <img src={item} alt='thumbnail' />
              </div>
            ))
          }
        </div>
      </div>


    </div>
  )
}

export default Lightbox