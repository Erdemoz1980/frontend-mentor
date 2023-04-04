import { useState } from "react";

const ModalCard = ({ edition, isOpen, selectedEdition, setSelectedEdition }) => {
  const { id, name, desc, min_pledge, countInStock } = edition;

  const [pledgeValue, setPledgeValue] = useState(min_pledge);

  const checked = selectedEdition === name;

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

  const onClickHandler = () => {
    setSelectedEdition(name)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    //is
  }
  
  return (
    <div className="modal-card-wrapper" style={modalCardStyle}>
    <div className="modal-card" >
     
      <label htmlFor={id} className="radio-label">
          <input type="radio" className="radio-button" checked={checked} id={id} name="radio-button" disabled={countInStock < 1} onClick={onClickHandler} />
        <span></span>
      </label>
      <div className="modal-text">
        <div className="modal-product-edition">
          <div className="modal-product-title">
            <h3>{name}</h3>
            <h3 className="pledge">Pledge ${min_pledge} or more</h3>
          </div>
          <h4 className="modal-qty">{countInStock}<span> left</span></h4>
        </div>
        <p>{desc}</p>
        </div>
        
      </div>
      <div className="pledge-container">
        <h4>Enter your pledge</h4>

        <form className="pledge-form" onSubmit={submitHandler}>
          <label htmlFor="pledge-input">
            <input type="text" name="" id="pledge-input" value={pledgeValue} onChange={(e) => setPledgeValue(e.target.value)} />
          </label>
        
          <button className="btn btn-pledge">Continue</button>
        </form>
        </div>
      </div>
  )
}

export default ModalCard