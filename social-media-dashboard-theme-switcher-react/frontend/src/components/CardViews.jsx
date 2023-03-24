
const CardViews = ({profile, icons:{upIcon, downIcon}}) => {
  const { platform, views: {current, previous }, icon } = profile;
  
const viewChgPctAbs = Math.abs(Math.round(((current - previous) / previous) * 100));
const viewChgPct = Math.round(((current - previous) / previous) * 100);

  const pctColor = {
    color:viewChgPct > 0 ? 'var(--clrLimeGreen)' : 'var(--clrBrightRed)'
  }

  return (
    <div className="card-overview">
      <header className="overview-header">
        <p>{platform==='Facebook' ? 'Page Views' : platform==='Instagram' ? 'Profile Views': platform==='Twitter' ? 'Retweets' : 'Total Views' }</p>
        <img src={icon} alt="icon" />
      </header>
      <div className="card-view-body">
        <h2>{current}</h2>
        <div >
          <img src={viewChgPct > 0 ? upIcon : downIcon} alt="arrow" />
          <span className="percentage" style={pctColor}> {viewChgPctAbs}%</span>
        </div>
        
      </div>
     
    </div>
  )
}

export default CardViews