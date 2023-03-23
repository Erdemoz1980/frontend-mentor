import upIcon from '../images/icon-up.svg';
import downIcon from '../images/icon-down.svg';

const CardMain = ({ profile }) => {
  const { name, platform, followers, views, likes, icon } = profile;

  const borderTop = {
    borderTop:`4px solid var(--clr${platform})`
}

  const folChg = followers.current - followers.previous;
  const absFolChg = Math.abs(folChg);
  
  const folChgColor = {
  color:folChg > 0 ? 'var(--clrLimeGreen)' : 'var(--clrBrightRed)'
}
  
  return (
    <div className="card" style={borderTop}>
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
  )
}

export default CardMain