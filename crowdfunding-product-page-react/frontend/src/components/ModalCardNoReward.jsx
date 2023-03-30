const ModalCardNoReward = () => {

  return (
    <div className="modal-card">
       <label htmlFor="radio-button" className="radio-label">
        <input type="radio" className="radio-button" id="radio-button" name="radio-button" />
        <span></span>
      </label>
      <div className="modal-text">
        <h3>Pledge with no reward</h3>
        <p>Choose to support us without reward if you simply beleive in our project. As a backer, you will be signed to receive product updates via email.</p>
      </div>
    </div>
  )
}

export default ModalCardNoReward 