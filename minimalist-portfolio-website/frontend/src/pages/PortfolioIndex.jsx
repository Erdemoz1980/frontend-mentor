import portfolioData from '../portfolioData.json';
import PortfolioCard from '../components/PortfolioCard';

const PortfolioIndex = () => {

  return (
    <div className="container">
      <div className="portofolio-index-wrapper">
        {
          portfolioData.map(portfolioItem => (
            <PortfolioCard key={portfolioItem.id} portfolioItem={portfolioItem} />
          ))
        }
      </div>

      </div>
  )
}

export default PortfolioIndex