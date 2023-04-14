
const PricingCard = ({ plan, checked }) => {
  const { type, priceAnnual, priceMonth, storageSize, storageUnit, noUsers, uploadSize, uploadUnit } = plan;
  

  return (
    <div className={`card ${type==='Professional'?'professional':''}`}>
      <header className="card-header">
        <h3 className={`plan-type ${type==='Professional'?'text-white':'text-dark'}`}>{type}</h3>
        <h1 className={`plan-price ${type==='Professional'?'text-white':'text-dark'}`}><span>$</span>{checked ? priceMonth : priceAnnual}</h1>
      </header>
      <section className={`card-body ${type==='Professional'?'text-white':'text-medium'}`}>
        <div className='card-item'>{storageSize} {storageUnit} Storage</div>
        <div className='card-item'>{noUsers} Users Allowed</div>
        <div className='card-item'>Send up to {uploadSize} {uploadUnit}</div>
      </section>
      <button className={`btn ${type==='Professional'?'btn-professional':''}`}>Learn More</button>
    </div>
  )
}

export default PricingCard