import { useState } from 'react';

const BillSplitterPanel = ({ input, setInput }) => {
  const [alert, setAlert] = useState(false);
  
  const tipPercentageHandler = (value) => {
    if (input.numPeople < 1) {
      setAlert(true)
    } else {
      setAlert(false);
      setInput(prevState => ({
        ...prevState,
        tipPercentage: value,
        tipAmount: prevState.billAmount * value,
        resetActive:true
      }))
    }
  };

  return (
    <div className="panel splitter-panel">
      <div className="bill-input-group">
        <p className="input-title">Bill</p>
        <label htmlFor="bill-input">
          <input
            type="text" name="bill" id="bill-input"
            className="input-field bill" placeholder="0" value={input.billAmount}
            onChange={(e)=>setInput(prevState=>({...prevState,billAmount:Number(e.target.value),resetActive:true}))}
          />
      </label>
      </div>
      <div className="tip-calculator">
        <p className="tip-title">Select Tip %</p>
        <div className="percentage-grid">
          <div className={`percentage ${input.tipPercentage===0.05 ? 'active':''}`} onClick={()=>tipPercentageHandler(0.05)}>5%</div>
          <div className={`percentage ${input.tipPercentage===0.1 ? 'active':''}`} onClick={()=>tipPercentageHandler(0.1)}>10%</div>
          <div className={`percentage ${input.tipPercentage===0.15 ? 'active':''}`} onClick={()=>tipPercentageHandler(0.15)}>15%</div>
          <div className={`percentage ${input.tipPercentage===0.25 ? 'active':''}`} onClick={()=>tipPercentageHandler(0.25)}>25%</div>
          <div className={`percentage ${input.tipPercentage===0.5 ? 'active':''}`} onClick={()=>tipPercentageHandler(0.5)}>50%</div>
          <input className="percentage custom" type="text" name="custom" id="custom" placeholder="Custom"  />
        </div>
      </div>
      
      <div className="nbr-input-group">
      <div className="nbr-people-container">
          <p className="input-title">Number of People</p>
          {alert && <p className="nbr-input-alert">Can't be zero</p>}
        </div>
        
        <label htmlFor="nbr-people">
          <input type="text" name='nbr-people' id='nbr-people' className="input-field nbr-people"  placeholder="0"
          value={input.numPeople}
          onChange={e=>setInput(prevState=>({...prevState, numPeople:Number(e.target.value), resetActive:true}))} 
          />
      </label>
      </div>
    </div>
  )
}

export default BillSplitterPanel