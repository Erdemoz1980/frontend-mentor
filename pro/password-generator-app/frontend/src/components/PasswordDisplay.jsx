import copyIcon from '../assets/images/icon-copy.svg';

const PasswordDisplay = ({password, error}) => {


  const onClickHandler = (e) => {
    
  }

  return (
    <div className={`password-display ${error ? 'error' : ''}`}>
      <h3>{error ? error : password}</h3>
      <div className="copy-container" onClick={onClickHandler}>
         <img src={copyIcon} alt="copy-icon" />
      </div>
   
    </div>
  )
}

export default PasswordDisplay