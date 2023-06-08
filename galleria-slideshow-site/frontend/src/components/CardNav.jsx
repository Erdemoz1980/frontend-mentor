import IconBack from './IconBack';
import IconNext from './IconNext';

const CardNav = ({ title, artist, percentage, navigateBack, navigateNext, disabled }) => {
  

  return (
    <nav className='card-nav-container' style={{ "--progressPercentage": `${percentage}%`}}>
      
      <div className="card-nav-text-container">
        <h3>{title}</h3>
      <p className="subhead2">{artist}</p>
      </div>

      <div className="card-nav-buttons">
        <IconBack navigateBack={navigateBack} disabled={disabled.back} />
        <IconNext navigateNext={navigateNext} disabled={disabled.next} />
      </div>
      
    </nav>
  )
}

export default CardNav