
const ModalCard = ({ edition, isOpen }) => {
  const {id, name, desc, min_pledge, countInStock } = edition;
 
  const isEnabled = countInStock > 0;

  const modalCardStyle = {
    opacity: isEnabled ? '1' : '0.5',
    border: isEnabled ? '1px solid rgba(180,180,180, 0.4)' : 'none',
    pointerEvents: isEnabled ? 'default' : 'none',
    transform:
      isOpen ? '' :
      edition.id % 2 === 0 ? 'translateX(-200%)'
      : 'translateX(200%)'
  }
  


  return (
    <div className="modal-card" style={modalCardStyle}>
     
      <label htmlFor={id} className="radio-label">
        <input type="radio" className="radio-button" id={id} name="radio-button" disabled={countInStock<1} />
        <span></span>
      </label>
      <div className="modal-text">
        <div className="modal-product-edition">
          <div className="modal-product-title">
            <h3>{name}</h3>
            <h3>Pledge ${min_pledge} or more</h3>
          </div>
          <h4 className="modal-qty">{countInStock}<span> left</span></h4>
        </div>
        
        <p>{desc}</p>
    </div>
  </div>
  )
}

export default ModalCard