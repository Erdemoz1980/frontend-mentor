
const PortfolioCard = ({ portfolioItem }) => {
  const { id, image, title, description } = portfolioItem

  return (
    <div className="card-wrapper">
      {id % 2 !== 0 ? (
        <>
          <div className="card-image">
            <img src={image} alt="portfolio screenshot" />
          </div>
          <div className="card-text">
            <h2>{title}</h2>
            <p>{description}</p>
            <button className="btn btn-secondary btn-large">View Project</button>
          </div>
        </>
      ) : (
        <>
          <div className="card-text">
            <h2>{title}</h2>
            <p>{description}</p>
            <button className="btn btn-secondary btn-large">View Project</button>
          </div>
          <div className="card-image">
            <img src={image} alt="portfolio screenshot" />
          </div>
        </>
      )}
    </div>
  )
}

export default PortfolioCard