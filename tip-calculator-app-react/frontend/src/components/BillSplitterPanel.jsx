import { useState } from 'react';

const BillSplitterPanel = ({ input, setInput }) => {
  const [alert, setAlert] = useState({
    billAlert:false,
    numPeopleAlert: false,
  });

  
  const tipPercentageHandler = (value) => {
    if (input.numPeople < 1) {
      setAlert(prevState => ({ ...prevState, numPeopleAlert: true }));
    } else if (input.billAmount <= 0) {
      setAlert(prevState => ({ ...prevState, billAlert: true }))
    }
    else {
      setAlert({ billAlert: false, numPeopleAlert: false });
      setInput(prevState => ({
        ...prevState,
        tipPercentage: value,
        tipAmount: prevState.billAmount * value,
        resetActive: true
      }))
    }
  };

  const tipPercentages = [
    { percentage: 0.05, displayValue: '5%' },
    { percentage: 0.1, displayValue: '10%' },
    { percentage: 0.15, displayValue: '15%' },
    { percentage: 0.25, displayValue: '25%' },
    { percentage: 0.5, displayValue: '50%' },
  ]

  return (
    <div className="panel splitter-panel">
      <div className="bill-input-group">
        <div className="bill-title-group">
          <p className="input-title">Bill</p>
          {alert.billAlert && <p className='alert'>Can't be zero</p>}
        </div>
        
        <label htmlFor="bill-input">
          <input
            type="text" name="bill" id="bill-input"
            pattern="^[0-9]+$" title='Please enter numerical characters only'
            className={`input-field bill ${alert.billAlert && 'alert'}`} placeholder="0" value={input.billAmount}
            onInput={(e) => {e.target.value = e.target.value.replace(/[^0-9]/g, '')}}
            onChange={(e) => setInput(prevState => ({ ...prevState, billAmount: Number(e.target.value), resetActive: true }))}
            
          />
      </label>
      </div>
      <div className="tip-calculator">
        <p className="tip-title">Select Tip %</p>
        <div className="percentage-grid">
          {tipPercentages.map(tip => (
            <div key={tip.percentage} className={`percentage ${input.tipPercentage===tip.percentage ? 'active' : ''}`} onClick={()=>tipPercentageHandler(tip.percentage)}>{tip.displayValue}</div>
           ))}
          <input className="percentage custom" type="text" name="custom" id="custom" placeholder="Custom" onChange={e=>tipPercentageHandler(Number(e.target.value)/100)}/>
        </div>
      </div>
      
      <div className="nbr-input-group">
      <div className="nbr-people-container">
          <p className="input-title">Number of People</p>
          {alert.numPeopleAlert && <p className="alert">Can't be zero</p>}
        </div>
        
        <label htmlFor="nbr-people">
          <input type="text" name='nbr-people' id='nbr-people' className={`input-field nbr-people ${alert.numPeopleAlert && 'alert'}`}  placeholder="0"
          value={input.numPeople}
          onChange={e=>setInput(prevState=>({...prevState, numPeople:Number(e.target.value), resetActive:true}))} 
          />
      </label>
      </div>
    </div>
  )
}

export default BillSplitterPanel