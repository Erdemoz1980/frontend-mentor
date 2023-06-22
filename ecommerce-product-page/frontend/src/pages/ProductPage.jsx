import ProductDetail from "../components/ProductDetail"

const ProductPage = ({ data, cartItems, setCartItems, isCartOpen, setIsCartOpen }) => {
  return (
    <div className='product-page-wrapper'>
      {
        data.map(product => (
          <ProductDetail key={product.id} {...product} cartItems={cartItems} setCartItems={setCartItems} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        ))
      }
    </div>
  )
};

export default ProductPage