const ModalCardNoReward = ({isOpen,selectedEdition, setSelectedEdition}) => {

  const moddalStyle = {
  transform: isOpen ? '' : 'translateY(-200%)'
  }
  
  const checked = selectedEdition === 'no-reward'

  return (
    <div className="modal-card-wrapper">
    <div className="modal-card" style={moddalStyle}>
       <label htmlFor="radio-button" className="radio-label">
          <input type="radio" className="radio-button" checked={checked} id="radio-button" name="radio-button"
          value='no-reward' onClick={()=>setSelectedEdition('no-reward')}
          />
        <span></span>
      </label>
      <div className="modal-text">
        <h3>Pledge with no reward</h3>
        <p>Choose to support us without reward if you simply beleive in our project. As a backer, you will be signed to receive product updates via email.</p>
      </div>
      </div>
      </div>
  )
}

export default ModalCardNoReward 