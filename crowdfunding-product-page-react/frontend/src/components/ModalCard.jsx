import { useContext } from "react";
import { useState } from 'react';
import { GlobalContext } from "../context/GlobalState";

const ModalCard = ({ edition }) => {
  const { id, name, desc, min_pledge, countInStock } = edition;

  const [pledgeValue, setPledgeValue] = useState(min_pledge);

  const {isOpen, selectedEdition,setSelectedEdition } = useContext(GlobalContext);

  const checked = selectedEdition === name;

  const isEnabled = countInStock > 0;

  const modalCardStyle = {
    border: checked ? '1px solid var(--clrModerateCyan)' : isEnabled ? '1px solid rgba(180,180,180, 0.4)' : 'none',
    boxShadow: checked ? '0 0 1px 1px var(--clrDarkCyan)' : 'none',
    transform: isOpen ? '' : edition.id % 2 === 0 ? 'translateX(-200%)' : 'translateX(200%)',
    filter: checked ? 'none' : 'blur(1px)',
    transition: 'filter 0.6s ease-in-out, transform 0.65s ease-in-out',
  }
  

  const submitHandler = (e) => {
    e.preventDefault();
  }
  
  return (
    <div className={`modal-card-wrapper ${isEnabled?'enabled':''} ${isOpen?'active':''} ${edition.id % 2 === 0?'even':'odd'}`}>

    <div className="modal-card" >
      <label htmlFor={id} className="radio-label">
          <input type="radio" className="radio-button" checked={checked} id={id} name="radio-button" disabled={countInStock < 1} onClick={()=>setSelectedEdition(name)} />
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
      <div className={checked ? 'pledge-container active' : 'pledge-container'}>
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