import BillSplitterPanel from '../components/BillSplitterPanel';
import TotalAmountPanel from '../components/TotalAmountPanel';

const BillSplitterApp = () => {
  return (
    <div className="main-panel">
      <BillSplitterPanel />
      <TotalAmountPanel />
    </div>
  )
}

export default BillSplitterApp 