
const ModalCard = ({ edition }) => {
  const {id, name, desc, min_pledge, countInStock } = edition;


  return (
    <div className="modal-card">
     
      <label htmlFor={id} className="radio-label">
        <input type="radio" className="radio-button" id={id} name="radio-button" />
        <span></span>
      </label>
    <div className="modal-text">
        <h3>{name}</h3>
        <p>{desc}</p>
    </div>
  </div>
  )
}

export default ModalCard