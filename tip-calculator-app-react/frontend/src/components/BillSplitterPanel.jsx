
const BillSplitterPanel = () => {
  return (
    <div className="panel splitter-panel">
     
      <div className="bill-input-group">
        <p>Bill</p>
        <label htmlFor="bill-input" className="label-util">
        <input type="text" name="bill" id="bill" className="bill-input" placeholder="0" />
      </label>
     

      </div>
   
      <div className="tip-calculator">
        <p className="tip-title">Select Tip %</p>
        <section className="tip-percentage-container">
          <div className="percentage">5%</div>
          <div className="percentage">10%</div>
          <div className="percentage">15%</div>
          <div className="percentage">25%</div>
          <div className="percentage">50%</div>
          <div className="percentage custom label-util">Custom</div>
        </section>
      </div>
      
      <div className="nbr-input-group">
        <p>Number of People</p>
        <label htmlFor="nbr-people" className="label-util">
        <input type="text" name='nbr-people' id='nbr-people' className="nbr-people-input" placeholder="0"/>
      </label>
      </div>
    </div>
  )
}

export default BillSplitterPanel