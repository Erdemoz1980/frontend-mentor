import ProductEditionCard from "./ProductEditionCard";

const ProductAboutCard = ({product, setIsOpen, setSelectedEdition}) => {
  const { about, editions } = product;

  return (
    <div className="card">
      <h2>About this project</h2>
      {
        about.split('\n').map((paragraph, index) => (
          <p className="about-text" key={index}>{paragraph}</p>
        ))
      }
      {
        editions.map(edition => (
          <ProductEditionCard edition={edition} key={edition.id} setIsOpen={setIsOpen}
            setSelectedEdition={setSelectedEdition} />
        ))
      }
    </div>
  )
}

export default ProductAboutCard