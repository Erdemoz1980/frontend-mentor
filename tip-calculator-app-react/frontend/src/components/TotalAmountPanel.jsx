
const TotalAmountPanel = () => {
  return (
    <div className="panel total-panel">
      <section className="amount-container">
        <div className="tip-amount">
          <div className="tip-label">
              <h3>Tip Amount</h3>
            <p>/ person</p>
            <h1>${/*Make it dynamic*/ }Tip/Person</h1>
          </div>
        </div>
        <div className="total-amount">
          <div className="total-label">
            <h3>Total</h3>
            <p>/ person</p>
          </div>
          <h1>${/*Make it dynamic*/ }Total</h1>
        </div>
      </section>
      <button className="btn btn-reset">reset</button>
    </div>
  )
}

export default TotalAmountPanel