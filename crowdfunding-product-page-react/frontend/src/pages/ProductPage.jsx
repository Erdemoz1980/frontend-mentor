import ProductDesc from "../components/ProductDesc"

const ProductPage = ({ product }) => {
  


  return (
    <div className="product-page">
      <img
        className='product-image'
        src={product.img}
        alt='product-img' />
      <div className="product-container">
        <ProductDesc product={product} />
      </div>
    </div>
  )
}

export default ProductPage