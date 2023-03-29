
const ProductEditionCard = ({ edition }) => {
  const { name, desc, min_pledge, countInStock } = edition;
  return (
    <div className="edition-card">
      <header className="edition-header">
        <h2>{name}</h2>
        <p>Pledge ${min_pledge} or more</p>
      </header>
      <div className="edition-text">
        <p>{desc}</p>
      </div>
      <footer className="edition-footer">
        <div><h1>{countInStock}</h1>left</div>
        <button className="btn btn-edition">Select Reward</button>
      </footer>
    </div>
  )
}

export default ProductEditionCard