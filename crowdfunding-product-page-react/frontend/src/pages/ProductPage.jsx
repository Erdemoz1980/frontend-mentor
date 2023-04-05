import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import ProductDescCard from "../components/ProductDescCard";
import ProductStatsCard from "../components/ProductStatsCard";
import ProductAboutCard from '../components/ProductAboutCard';
import Modal from "../components/Modal";
import ModalCompleted from '../components/ModalCompleted';
import ModalAlert from '../components/ModalAlert';

const ProductPage = () => {
  const { product } = useContext(GlobalContext);
  
  return (
    <div className="product-page">
      <Modal />
      <ModalCompleted />
      <ModalAlert />
      {product && (<img
        className='product-image'
        src={product.img}
        alt='product-img' />)
      }
      
       
      <div className="product-container">
        <ProductDescCard product={product} />
        <ProductStatsCard product={product} />
        <ProductAboutCard product={product} />
      </div>
    </div>
  )
}

export default ProductPage