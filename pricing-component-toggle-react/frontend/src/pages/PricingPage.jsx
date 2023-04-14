import PricingCard from "../components/PricingCard"

const PricingPage = ({data}) => {
  return (
    <div className="page-container">
      <h1 className="main-title text-medium">Our Pricing</h1>
      <div className="pricing-switch-container">
        <p className="text-light">Annually</p>
        <label htmlFor="plan-switch">
          <input type="radio" name="plan-switch" id="plan-switch"
          className="plan-switch"
          />
          <span></span>
        </label>
        <p className="text-light">Monthly</p>
      </div>
     
      <div className="card-container">
        {data.map(plan=>(<PricingCard plan={plan} />))}
    </div>

      
    </div>
  )
}

export default PricingPage