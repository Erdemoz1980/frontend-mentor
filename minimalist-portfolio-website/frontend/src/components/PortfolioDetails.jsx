import { useParams } from 'react-router-dom';
import portfolioData from '../portfolioData.json';

const PortfolioDetails = () => {
  const { id } = useParams()

  const portfolioItem = portfolioData.find(item => item.id.toString() === id);
  const { title, description } = portfolioItem;

  const { imgDeskHero, projectBackground, keywords, techStack, staticPreviews } = portfolioItem.details;
  
  return (
    <div className="container">
        <div className="details-hero">
          <img src={imgDeskHero} alt="hero display" />
        </div>
        <div className='portfolio-details-wrapper'>
        <div className="details-description">
          <h2>{title}</h2>
          <p>{description}</p>
          <p>
            {keywords.map(keyword => (
              <span key={keyword.id}>{keyword.name} </span>
            ))}
          </p>
          <p>
            {techStack.map(tech => (
              <span key={tech.id}>{tech.name}</span>
            ))}
          </p>
          <div className="btn btn-secondary">Visit Website</div>
        </div>

        <div className="project-background">
          <h3>Project Background</h3>
          <p>{projectBackground}</p>
        </div>

        <div className="static-previews-wrapper">
          {staticPreviews.map(preview => (
            <div key={preview.id} className='preview-image-wrapper'>
              <img src={preview.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortfolioDetails