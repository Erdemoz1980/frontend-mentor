import { useRef } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ModalCompleted = () => {
  const { isOpen, setIsOpen } = useContext(GlobalContext);
  const overlayRef = useRef();

  const closeModal = (e) => {
    if (e.target === overlayRef.current) {
      setIsOpen({
        mainModalOpen: false,
        completedModalOpen: false,
        alertModalOpen:false
      })
    }
  }
  
  return (
    <div className={`modal-overlay ${isOpen.completedModalOpen ? 'active' : ''}`} ref={overlayRef} onClick={closeModal}>

      <div className={`modal modal-completed ${isOpen.completedModalOpen ? 'slide' : ''}`}>
        <div className="check-mark-container">
          <div className="check-mark"></div>
        </div>
        <h2>Thanks for your support!</h2>
        <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed</p>
        <div className="btn btn-primary" onClick={()=>setIsOpen({
        mainModalOpen: false,
        completedModalOpen: false
      })}>Got it!</div>

      </div>
    
      </div>
  )
}

export default ModalCompleted