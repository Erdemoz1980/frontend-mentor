
const PortfolioCard = ({ portfolioItem }) => {
  const { id, image, title, description } = portfolioItem
  
  return (
    <div className="card-wrapper">
      <div className="card-image">
        <img src={image} alt="portfolio screenshot" />
      </div>
      <div className="card-text">
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="btn btn-secondary btn-large">View Project</button>
      </div>
     

    </div>
  )
}

export default PortfolioCard