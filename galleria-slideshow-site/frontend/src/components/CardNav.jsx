import ButtonPrevious from './ButtonPrevious';
import ButtonNext from './ButtonNext';

const CardNav = ({ title, artist, percentage, navigateBack, navigateNext, disabled }) => {
  

  return (
    <div className='card-nav-container' style={{ "--progressPercentage": `${percentage}%`}}>
      
      <nav className="card-nav">
      <div className="card-nav-text-container">
        <h3 className='card-nav-title'>{title}</h3>
      <p className="subhead2 subhead2-mobile">{artist}</p>
      </div>

      <div className="card-nav-buttons">
        <ButtonPrevious navigateBack={navigateBack} disabled={disabled.previous} />
        <ButtonNext navigateNext={navigateNext} disabled={disabled.next} />
      </div>
      </nav>
    </div>
  )
}

export default CardNav