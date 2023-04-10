
const TotalAmountPanel = ({input, reset}) => {
  const { billAmount, tipAmount, numPeople, resetActive } = input;
  
  const tipPerPerson = (billAmount <= 0 || numPeople <= 0) ? Number(0).toFixed(2) : (tipAmount / numPeople).toFixed(2);
  const totalPerPerson = (billAmount <= 0 || tipAmount <= 0 || numPeople <= 0) ? Number(0).toFixed(2) : ((billAmount / numPeople) + (tipAmount / numPeople)).toFixed(2);


  return (
    <div className="panel total-panel">
      <section className="amount-container">
        <div className="amount">
          <div className="amount-label">
              <h3>Tip Amount</h3>
            <p>/ person</p>
          </div>
          <h1>${tipPerPerson}</h1>
        </div>
        <div className="amount">
          <div className="amount-label">
            <h3>Total</h3>
            <p>/ person</p>
          </div>
          <h1>${totalPerPerson}</h1>
        </div>
      </section>
      <button className={`btn ${resetActive ? 'reset-active' : ''}`}
        onClick={reset}>reset</button>
    </div>
  )
}

export default TotalAmountPanel