import Header from './components/Header';
import PricingPanel from "./components/PricingPanel"
import BenefitsPanel from './components/BenefitsPanel';
import IconCheck from './components/IconCheck';

const App = () => {
  return (
    <>
      <Header />
      <div className='panel-container'>
       <PricingPanel />
       <BenefitsPanel />
      </div>
   
     </>
  )
}

export default App