import ProductDetail from "../components/ProductDetail"

const ProductPage = ({data}) => {
  return (
    <div className='product-page-wrapper'>
      {
        data.map(product => (
          <ProductDetail key={product.id} {...product} />
        ))
      }
    </div>
  )
}

export default ProductPage