
const ProductDesc = ({ product }) => {
  const { logo, name, description } = product;
  return (
    <div className="card product-desc">
      <img className="product_logo" src={logo} alt="product_logo" />
      <div className="product-desc-text">
         <h1>{name}</h1>
         <p>{description}</p>
      </div>
      <footer className="product-desc-footer">
        <button className="btn btn-primary btn-main">
          Back this project
        </button>
        <button className="btn btn-bookmark">
          Bookmark
        </button>
        </footer>
    </div>
  )
}

export default ProductDesc