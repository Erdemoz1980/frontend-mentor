import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ModalCardNoReward = () => {
  const {isOpen, selectedEdition, setSelectedEdition } = useContext(GlobalContext);
 
  const checked = selectedEdition === 'no-reward'

  const modalStyle = {
    transform: isOpen ? '' : 'translateY(-200%)',
    border: checked ? '1px solid var(--clrModerateCyan)' : '1px solid rgba(180,180,180, 0.4)',
    boxShadow: checked ? '0 0 1px 1px var(--clrDarkCyan)' : 'none',
    filter: checked ? 'none' : 'blur(1px)',
    transition: 'filter 0.6s ease-in-out, transform 0.65s ease-in-out',
  }
  


  return (
    <div className={`modal-card-wrapper no-reward enabled ${isOpen ? 'active' : ''}`} >
    <div className="modal-card" >
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