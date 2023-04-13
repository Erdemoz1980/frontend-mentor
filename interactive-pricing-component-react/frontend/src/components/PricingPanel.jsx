import { useState } from 'react';

const PricingPanel = ({data}) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [checked, setChecked] = useState(false);
  const [planValue, setPlanValue] = useState(Number(data[0].price))
  
  const handleSliderChange = (e) => {
    const value = e.target.value;
    setSliderValue(value);
    setPlanValue(Number(data[value].price));
  }

  const sliderTrackStyle = {
    '--sliderTrackWidth': `${(sliderValue / 4) * 100}%`
  };

  const radioCheckHandler = () => {
    setChecked(!checked);
    /*Set the discount*/ 
    setPlanValue(prevPlanValue => {
      return checked ? prevPlanValue / 0.75 : prevPlanValue * 0.75;
    });
  };

  return (
    <div className="pricing-panel">
      <section className="pricing-panel-header">
        <h4 className="views-count text">100K Pageviews</h4>
        <h1 className="price">${Number(planValue).toFixed(2)}<span className='text'>/month</span></h1>
      </section>

      <label htmlFor="price-slider">
        <input className='price-slider' type="range" name="price-slider" id="price-slider" min="0" max="4" value={sliderValue} onChange={handleSliderChange} style={sliderTrackStyle} />
     </label>
      <section className="billing-container">
        <p className='billing-title text'>Monthly Billing</p>
        <label className='billing-cycle-label' htmlFor="billing-cycle">
          <input type="radio" name="billing" id="billing-cycle"
            checked={checked}
            onClick={radioCheckHandler}
          />
         <span></span>
        </label>
        <p className='billing-title text'>Yearly Billing</p>
        <p className='billing-title small'>25% discount</p>
      </section>
   </div>
  )
}

export default PricingPanel