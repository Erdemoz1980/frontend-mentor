
const TotalAmountPanel = () => {
  return (
    <div className="panel total-panel">
      <section className="amount-container">
        <div className="amount">
          <div className="amount-label">
              <h3>Tip Amount</h3>
            <p>/ person</p>
          </div>
          <h1>$0.00</h1>
        </div>
        <div className="amount">
          <div className="amount-label">
            <h3>Total</h3>
            <p>/ person</p>
          </div>
          <h1>$0.00</h1>
        </div>
      </section>
      <button className="btn btn-reset">reset</button>
    </div>
  )
}

export default TotalAmountPanel