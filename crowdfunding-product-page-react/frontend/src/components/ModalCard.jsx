import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const ModalCard = ({ edition }) => {
  const { id, name, desc, min_pledge, countInStock } = edition;
  const {isOpen, setIsOpen ,selectedEdition,setSelectedEdition } = useContext(GlobalContext);

  const [pledgeValue, setPledgeValue] = useState(min_pledge);
  const pledgeValRegex =/^[0-9]{2,5}(\.[0-9]{1,2})?$/

  const checked = selectedEdition === name;

  const isEnabled = countInStock > 0;

  const submitHandler = (e) => {
    e.preventDefault();
    if(pledgeValue<min_pledge){
      setIsOpen({
        alertModalOpen: true,
        mainModalOpen: false,
        completedModalOpen: false,
      })
    } else {
        setIsOpen({
      mainModalOpen: false,
      completedModalOpen: true,
      alertModalOpen:false
    })
    }
     
  
  }
  
  return (
    <div
      className={`modal-card-wrapper ${isEnabled ? 'enabled' : ''} ${isOpen.mainModalOpen ? 'active' : ''} ${edition.id % 2 === 0 ? 'even' : 'odd'} ${checked?'checked':''}`}>

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
            <input type="text" name="" id="pledge-input"  value={pledgeValue} onChange={(e) => setPledgeValue(e.target.value.replace(/[^0-9.]/g,''))}/>
          </label>
        
          <button className="btn btn-pledge">Continue</button>
        </form>
        </div>
      </div>
  )
}

export default ModalCard