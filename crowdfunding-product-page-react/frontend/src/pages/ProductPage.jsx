import { useState } from 'react';
import ProductDescCard from "../components/ProductDescCard";
import ProductStatsCard from "../components/ProductStatsCard";
import ProductAboutCard from '../components/ProductAboutCard';
import Modal from "../components/Modal";

const ProductPage = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEdition, setSelectedEdition] = useState(null);

  console.log(selectedEdition);
  
  return (
    <div className="product-page">
      <Modal selectedEdition={selectedEdition} setSelectedEdition={setSelectedEdition} editions={product.editions} isOpen={isOpen} setIsOpen={setIsOpen} />
      <img
        className='product-image'
        src={product.img}
        alt='product-img' />
       
      <div className="product-container">
        <ProductDescCard product={product} />
        <ProductStatsCard product={product} />
        <ProductAboutCard product={product} setIsOpen={setIsOpen} setSelectedEdition={setSelectedEdition} />
      </div>
    </div>
  )
}

export default ProductPage