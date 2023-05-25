import data from '../data.json';
import PortfolioCard from '../components/PortfolioCard';

const PortfolioIndex = () => {
  return (
    <div className="container">
      <div className="portofolio-index-wrapper">
        {
          data.map(portfolioItem => (
            <PortfolioCard key={portfolioItem.id} portfolioItem={portfolioItem} />
          ))
        }
      </div>

      </div>
  )
}

export default PortfolioIndex