import ProductDescCard from "../components/ProductDescCard";
import ProductStatsCard from "../components/ProductStatsCard";

const ProductPage = ({ product }) => {
  
  return (
    <div className="product-page">
      <img
        className='product-image'
        src={product.img}
        alt='product-img' />
      <div className="product-container">
        <ProductDescCard product={product} />
        <ProductStatsCard product={product} />
      </div>
    </div>
  )
}

export default ProductPage