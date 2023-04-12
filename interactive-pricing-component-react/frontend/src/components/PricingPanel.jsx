import { useState } from 'react';

const PricingPanel = () => {
  const [sliderValue, setSliderValue] = useState(5);
  
  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  }

  const sliderTrackStyle = {
    '--sliderTrackWidth': `${(sliderValue / 5) * 100}%`
  };

  return (
    <div className="pricing-panel">
      <section className="pricing-panel-header">
        <h4 className="views-count text">100K Pageviews</h4>
        <h1 className="price">$16.00 <span className='text'>/month</span></h1>
      </section>

      <label htmlFor="price-slider">
        <input className='price-slider' type="range" name="price-slider" id="price-slider" min="0" max="5" value={sliderValue} onChange={handleSliderChange} style={sliderTrackStyle} />
     </label>
      <section className="billing-container">
        <p className='billing-title text'>Monthly Billing</p>
        <label htmlFor="billing-cycle">
           <input type="radio" name="billing" id="billing-cycle" />
        </label>
        <p className='billing-title text'>Yearly Billing</p>
        <p className='billing-title small'>25% discount</p>
      </section>
   </div>
  )
}

export default PricingPanel