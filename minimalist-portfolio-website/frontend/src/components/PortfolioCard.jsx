import { Link } from 'react-router-dom';

const PortfolioCard = ({ portfolioItem }) => {
  const { id, image, title, description } = portfolioItem;

  return (
    <div className="card-wrapper">
      {id % 2 !== 0 ? (
        <>
          <div className="card-image-wrapper">
            <img src={image} alt="portfolio screenshot" />
        </div>
            
          <div className="card-text">
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={`/portfolio/${id}`}><button className="btn btn-secondary btn-large">View Project</button></Link> 
          </div>
        </>
      ) : (
        <>
          <div className="card-text">
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={`/portfolio/${id}`}><button className="btn btn-secondary btn-large">View Project</button></Link>
          </div>
          <div className="card-image-wrapper">
            <img src={image} alt="portfolio screenshot" />
        </div>
        </>
      )}
    </div>
  )
}

export default PortfolioCard