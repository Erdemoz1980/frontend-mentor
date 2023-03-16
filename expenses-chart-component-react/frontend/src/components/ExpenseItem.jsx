

const ExpenseItem = ({ item, maxAmount }) => {
  const { day, amount } = item;

  const barStyle = {
    height: `${(amount / maxAmount) * 100}%`,
    background:amount===maxAmount ? `var(--clrCyan)` : 'var(--clrSoftRed)'
  }
   
  return (
    <div className="bar-container">
      <small className='day'>{day}</small>
      <div
        className="bar"
        style={barStyle}
      ></div>
      
    </div>
  )
}

export default ExpenseItem