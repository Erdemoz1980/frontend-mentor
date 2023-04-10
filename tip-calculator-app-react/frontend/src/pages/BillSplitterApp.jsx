import { useState } from 'react';
import BillSplitterPanel from '../components/BillSplitterPanel';
import TotalAmountPanel from '../components/TotalAmountPanel';

const BillSplitterApp = () => {
  const [input, setInput] = useState({
    billAmount: 0,
    tipPercentage:0,
    tipAmount: 0,
    numPeople: 0,
    resetActive:false
  });

  const reset = () => {
   setInput({billAmount:0, tipAmount:0, numPeople:0, resetActive:false})
  }
  
  console.log(input)
  return (
    <div className="main-panel">
      <BillSplitterPanel input={input} setInput={setInput}/>
      <TotalAmountPanel input={input} setInput={setInput} reset={reset} />
    </div>
  )
}

export default BillSplitterApp 