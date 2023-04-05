import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ModalCardNoReward = () => {
  const {isOpen, selectedEdition, setSelectedEdition } = useContext(GlobalContext);
 
  const checked = selectedEdition === 'no-reward'

  return (
    <div className={`modal-card-wrapper no-reward enabled ${isOpen.mainModalOpen ? 'active' : ''} ${checked?'checked':''}`} >
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