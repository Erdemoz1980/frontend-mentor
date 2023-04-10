
const TotalAmountPanel = ({ amount, setAmount }) => {
  const { billAmount, tipAmount, numPeople } = amount;

  return (
    <div className="panel total-panel">
      <section className="amount-container">
        <div className="amount">
          <div className="amount-label">
              <h3>Tip Amount</h3>
            <p>/ person</p>
          </div>
          <h1>${Number(tipAmount).toFixed(2)}</h1>
        </div>
        <div className="amount">
          <div className="amount-label">
            <h3>Total</h3>
            <p>/ person</p>
          </div>
          <h1>${`${Number(numPeople)<1 || Number(tipAmount)<=0 ? '0.00' : (Number(billAmount)/Number(numPeople)+Number(tipAmount)).toFixed(2)}`}</h1>
        </div>
      </section>
      <button className="btn">reset</button>
    </div>
  )
}

export default TotalAmountPanel