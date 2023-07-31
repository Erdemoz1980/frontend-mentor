import { Link } from 'react-router-dom';


const PortfolioCard = ({ portfolioItem }) => {
  const { id, image, title, description, descriptionGPT } = portfolioItem

  return (
    <div className="card-wrapper">
      {id % 2 !== 0 ? (
        <>
            <img className='card-image' src={image} alt="portfolio screenshot" />
          <div className="card-text">
            <h2>{title}</h2>
            <p>{descriptionGPT ? descriptionGPT : description}</p>
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
          <img className='card-image' src={image} alt="portfolio screenshot" />
        </>
      )}
    </div>
  )
}

export default PortfolioCard