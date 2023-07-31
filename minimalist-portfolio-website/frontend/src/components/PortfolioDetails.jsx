import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import portfolioData from '../portfolioData.json';
import arrowRight from '../images/icons/arrow-right.svg';
import arrowLeft from '../images/icons/arrow-left.svg';
import CTAContactMe from '../components/CTAContactMe';

const PortfolioDetails = () => {
  const { id } = useParams()

  const currentItem = portfolioData.find(item => item.id.toString() === id);
  const { title, description } = currentItem;

  const { url, details: { imgDeskHero, projectBackground, keywords, techStack, staticPreviews } } = currentItem;


  
  const prevItem = portfolioData.indexOf(currentItem) === 0 ? portfolioData[portfolioData.length - 1] : portfolioData[portfolioData.indexOf(currentItem) - 1];
  const nextItem = portfolioData.indexOf(currentItem) === portfolioData.length - 1 ? portfolioData[0] : portfolioData[portfolioData.indexOf(currentItem) + 1];

  return (
    <div className="container">
      <div className="details-hero-wrapper">
        <img src={imgDeskHero} alt="hero display" />
      </div>
      <div className='portfolio-details-wrapper'>
        <div className="details-description-wrapper">
          <h2>{title}</h2>
          <p className='description'>{description}</p>
          <p className='keywords-wrapper'>
            {keywords.map((keyword, index) => (
              <span key={keyword.id} className='keywords'>
                {keyword.name}
                {index !== keywords.length - 1 && ' / '}
              </span>
            ))}
          </p>
          <p className='techstack-wrapper'>
            {techStack.map((tech, index) => (
              <span key={tech.id} className='keywords'>
                {tech.name}
                {index !== techStack.length - 1 && ' / '}
              </span>
            ))}
          </p>
          <a href={url} target='_blank' rel="noreferrer" className="btn btn-secondary btn-md">Visit Website</a>
        </div>
        <div className="project-background">
          <h3>Project Background</h3>
          <p className='project-background-text'>{projectBackground}</p>

          <div className="static-previews-wrapper">
            <h3>Static Previews</h3>
            {staticPreviews.map(preview => (
              <div key={preview.id} className='static-preview-img'>
                <img src={preview.image} alt="preview" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <nav className="details-nav">
        <div className="prev-details">
          <Link to={`/portfolio/${prevItem.id}`}>
            <img src={arrowLeft} alt='arrow left' />
          </Link>
          <div className="prev-navigation">
            <h3>{prevItem.title}</h3>
            <p>Previous Project</p>
          </div>
        </div>
        <div className="next-details">
          <div className="next-navigation">
            <h3>{nextItem.title}</h3>
            <p>Next Project</p>
          </div>
          <Link to={`/portfolio/${nextItem.id}`}>
            <img src={arrowRight} alt='arrow right' />
          </Link>
        </div>
      </nav>
      <CTAContactMe />
    </div>
  )
};

export default PortfolioDetails