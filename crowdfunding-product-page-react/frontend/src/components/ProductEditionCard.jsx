
const ProductEditionCard = ({ edition }) => {
  const { name, desc, min_pledge, countInStock } = edition;
  
  const opacity = {
    opacity:countInStock > 0 ? '1' :'0.5'
  }
  const btnStyle = {
    background:countInStock > 0 ? 'var(--clrModerateCyan)' : 'var(--clrDarkGray)'
  }
  return (
    <div className="edition-card" style={opacity}>
      <header className="edition-header">
        <h2>{name}</h2>
        <p>Pledge ${min_pledge} or more</p>
      </header>
        <p className="edition-text">{desc}</p>
      <footer className="edition-footer">
        <div><h1>{countInStock}</h1>
          <p>left</p>
        </div>
        <button className="btn btn-edition" style={btnStyle}>{countInStock>0?'Select Reward' : 'Out of stock'}</button>
      </footer>
    </div>
  )
}

export default ProductEditionCard