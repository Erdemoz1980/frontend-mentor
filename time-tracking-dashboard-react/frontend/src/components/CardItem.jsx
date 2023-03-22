
const CardItem = ({ activity, timeFrame }) => {
  const {category, timeframes, bgIcon, iconBtn } = activity;
  
  const categoryNoSpaces = category.replace(/\s+/g, '');

  const background = {
    background:`var(--clr${categoryNoSpaces})`
  }
  
  return (
    <div className="card" >
         
      <div className="card-tab" style={background}>
      <img className='card-img' src={bgIcon} alt="bg-icon" />
      </div>
      <div className="card-body">
            <div className="card-category">
          <h4>{category}</h4>
          <img src={iconBtn} alt="icon-ellipsis" />
        </div>
        <div className="current-hours">
          <h1>{timeframes[timeFrame].current}hrs</h1>
          <div className="previous-stats">
          <p>{timeframes[timeFrame]==='daily' ? 'Yesterday' : timeframes[timeFrame]==='weekly' ? 'Last Week' : 'Last Month'} - {timeframes[timeFrame].previous}hrs</p>
        </div>
          </div>
      </div>
    </div>
  )
}

export default CardItem