

const ProductStatsCard = ({ product }) => {
  const { total_backed_amt, total_goal,num_backers, days_left } = product;
  return (
    <div className="card product-stats">
      <div className="stat-item">
        <h1>{total_backed_amt}</h1>
        <p>of {total_goal} backed</p>
      </div>
      <div className="stat-item">
        <h1>{num_backers}</h1>
        <p>total backers</p>
      </div>
      <div className="stat-item">
        <h1>{days_left}</h1>
        <p>days left</p>
      </div>
    </div>
  )
}

export default ProductStatsCard