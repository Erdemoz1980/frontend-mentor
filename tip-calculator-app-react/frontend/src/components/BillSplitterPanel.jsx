import { useState } from "react";

const BillSplitterPanel = ({ amount, setAmount }) => {
  const [alert, setAlert] = useState(false);
  const {billAmount, numPeople } = amount;

  const calculateTip = (percentage) => {
    const tipPerson = Number(billAmount) * Number(percentage) / Number(numPeople);
    return tipPerson.toFixed(2)
  }

  const handleTipChange = (percentage) => {
    //Check to make sure number of people > 0
    if (numPeople < 1) {
      setAlert(true);
    } else {
      setAlert(false);
      setAmount(prevState => ({
        ...prevState,
        tipAmount: calculateTip(percentage)
      }
      ))
    }
  };

  return (
    <div className="panel splitter-panel">
      <div className="bill-input-group">
        <p className="input-title">Bill</p>
        <label htmlFor="bill-input">
          <input
            type="text" name="bill" id="bill-input" value={billAmount}
            className="input-field bill" placeholder="0" onChange={(e)=>setAmount({...amount, billAmount:e.target.value})} />
      </label>
      </div>

      <div className="tip-calculator">
        <p className="tip-title">Select Tip %</p>
        <form className="percentage-grid">
          <input type="button" className="percentage" value="5%" onClick={()=>handleTipChange(0.05)} />
          <input type="button" className="percentage" value="10%" onClick={()=>handleTipChange(0.1)} />
          <input type="button" className="percentage" value="15%" onClick={()=>handleTipChange(0.15)} />
          <input type="button" className="percentage" value="20%" onClick={()=>handleTipChange(0.2)} />
          <input type="button" className="percentage" value="50%" onClick={()=>handleTipChange(0.5)} />
          <input className="percentage custom" type="text" name="custom" id="custom" placeholder="Custom" onChange={(e)=>handleTipChange(Number(e.target.value)/100)} />
        </form>
      </div>
      
      <div className="nbr-input-group">
        <div className="nbr-people-container">
          <p className="input-title">Number of People</p>
          {alert && <p className="nbr-input-alert">Can't be zero</p>}
        </div>
        
        <label htmlFor="nbr-people">
          <input type="text" name='nbr-people' id='nbr-people' value={numPeople} className={`input-field nbr-people ${alert ? 'alert' : ''}`} placeholder="0"
            onChange={(e) => setAmount({ ...amount, numPeople: e.target.value })} />
      </label>
      </div>
    </div>
  )
}

export default BillSplitterPanel