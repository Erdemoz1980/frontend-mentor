import data from '../data.json';
import ExpenseItem from './ExpenseItem';

const Expenses = () => {
  const maxAmount = Math.max(...data.map(item => item.amount));


  return (
    <div className="expenses">
      <h1>Spending - Last 7 days</h1>
      <div className="chart-container">
        {data.map(item => (
          <ExpenseItem item={item} maxAmount={maxAmount} />
      ))}
      </div>
      <footer>
      <div className="total">
        <p>Total this month</p>
        <h1>$478.33</h1>
      </div>
      <div className='monthly'>
        <p className='percentage'>+2.4%</p>
        <p>from last month</p>
      </div>
    </footer>
    </div>
  )
}

export default Expenses