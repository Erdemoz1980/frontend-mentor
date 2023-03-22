
const CardBio = ({ bio, handleTimeFrame, timeFrame }) => {
  const { img, name } = bio;

  return (
    <main className="card-featured">
      <section className="bio-section">
          <img className="bio-img" src={img} alt="bio" />
        <p>Report for</p>
        <h2 className="name">{name}</h2>
      </section>
      <section className="timeframes">
        <ul>
          <li>
            <button
              className={timeFrame === 'daily' ? 'active' : ''}
              onClick={()=>handleTimeFrame('daily')}
            >Daily</button>
          </li>
          <li>
            <button
              className={timeFrame === 'weekly' ? 'active' : ''}
              onClick={()=>handleTimeFrame('weekly')}
            >Weekly</button>
          </li>
          <li>
            <button
              className={timeFrame === 'monthly' ? 'active' : ''}
              onClick={()=>handleTimeFrame('monthly')}
            >Monthly</button>
          </li>
          
        </ul>
      </section>
    </main>
  )
}

export default CardBio