import ProductCard from "../components/ProductCard";

const ProductPage = ({ data }) => {
  
  return (
    <div className='product-page-wrapper'>
      {
        data.map(item => (
          <ProductCard key={item.id} {...item} />
        ))
      }
    </div>
  )
};

export default ProductPage