import Header from './components/Header';
import PricingPanel from "./components/PricingPanel"
import BenefitsPanel from './components/BenefitsPanel';
import data from './data.json'

const App = () => {
  return (
    <>
      <Header />
      <div className='panel-container'>
       <PricingPanel data={data} />
       <BenefitsPanel />
      </div>
   
     </>
  )
}

export default App