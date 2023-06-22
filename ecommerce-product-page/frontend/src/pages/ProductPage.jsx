import ProductDetail from "../components/ProductDetail"

const ProductPage = ({ data, cartItems, setCartItems }) => {
  return (
    <div className='product-page-wrapper'>
      {
        data.map(product => (
          <ProductDetail key={product.id} {...product} cartItems={cartItems} setCartItems={setCartItems} />
        ))
      }
    </div>
  )
};

export default ProductPage