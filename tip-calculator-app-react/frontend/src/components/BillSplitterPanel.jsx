
import { useState } from "react"
const BillSplitterPanel = () => {
  const [customValue, setCustomValue] = useState('');

  return (
    <div className="panel splitter-panel">
      <div className="bill-input-group">
        <p className="input-title">Bill</p>
        <label htmlFor="bill-input">
          <input type="text" name="bill" id="bill-input"
            className="input-field bill" placeholder="0" />
      </label>
      </div>

      <div className="tip-calculator">
        <p className="tip-title">Select Tip %</p>
        <section className="percentage-grid">
          <button className="percentage">5%</button>
          <button className="percentage">10%</button>
          <button className="percentage">15%</button>
          <button className="percentage">25%</button>
          <button className="percentage">50%</button>
          <input className="percentage custom" type="text" name="custom" id="custom" placeholder="Custom" />
        </section>
      </div>
      
      <div className="nbr-input-group">
        <p className="input-title">Number of People</p>
        <label htmlFor="nbr-people">
        <input type="text" name='nbr-people' id='nbr-people' className="input-field nbr-people" placeholder="0"/>
      </label>
      </div>
    </div>
  )
}

export default BillSplitterPanel