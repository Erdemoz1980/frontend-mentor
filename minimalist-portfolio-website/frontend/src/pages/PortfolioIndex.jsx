import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import portfolioData from '../portfolioData.json';
import PortfolioCard from '../components/PortfolioCard';
import CTAContactMe from '../components/CTAContactMe';


const PortfolioIndex = ({setActivePage}) => {
  const location = useLocation();
  useEffect(() => {
    setActivePage(location)
  },[location, setActivePage])



  return (
    <div className="container">
      <div className="portfolio-index-wrapper">
        {
          portfolioData.map(portfolioItem => (
            <PortfolioCard key={portfolioItem.id} portfolioItem={portfolioItem} />
          ))
        }
      </div>
      <CTAContactMe />
      </div>
  )
}

export default PortfolioIndex