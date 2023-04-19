import copyIcon from '../assets/images/icon-copy.svg';

const PasswordDisplay = () => {


  const onClickHandler = (e) => {
    
  }

  return (
    <div className='password-display'>
      <h3>GDF%v$G43$</h3>
      <div className="copy-container" onClick={onClickHandler}>
         <img src={copyIcon} alt="copy-icon" />
      </div>
   
    </div>
  )
}

export default PasswordDisplay