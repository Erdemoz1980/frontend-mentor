import { useState } from 'react';
import BillSplitterPanel from '../components/BillSplitterPanel';
import TotalAmountPanel from '../components/TotalAmountPanel';

const BillSplitterApp = () => {
  const [amount, setAmount] = useState({
    billAmount:0,
    numPeople:0,
    tipAmount:0
  });

  console.log(amount);
  return (
    <div className="main-panel">
      <BillSplitterPanel amount={amount} setAmount={setAmount}/>
      <TotalAmountPanel amount={amount} setAmount={setAmount} />
    </div>
  )
}

export default BillSplitterApp 