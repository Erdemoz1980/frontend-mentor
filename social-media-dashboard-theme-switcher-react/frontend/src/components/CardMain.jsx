
const CardMain = ({ profile, icons:{upIcon, downIcon}, darkTheme }) => {
  const { name, platform, followers, icon } = profile;

  const folChg = followers.current - followers.previous;
  const absFolChg = Math.abs(folChg);
  
  const folChgColor = {
  color:folChg > 0 ? 'var(--clrLimeGreen)' : 'var(--clrBrightRed)'
  }

  const border = {
    borderTop: `4px solid ${platform === 'Instagram' ? '' : `var(--clr${platform})`}`,
    borderImage: `${platform === 'Instagram' ? `var(--clr${platform})` : ''}`,
  }


 
  return (
    <div className="card-container">
    <div className="card-main" style={border}>
      <div className="card-header">
        <img src={icon} alt="icon" />
        <p>{name}</p>
      </div>
      <div className="card-body">
        <h1>{followers.current}</h1>
        <p>{platform==='Youtube' ? 'subscribers' : 'followers'}</p>
      </div>
      <footer className="card-footer" style={folChgColor}>
        <img src={folChg > 0 ? upIcon : downIcon} alt='icon' /> {absFolChg} Today
      </footer>

      </div>
      </div>
  )
}

export default CardMain