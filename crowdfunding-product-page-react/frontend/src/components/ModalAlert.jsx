import { useRef } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ModalAlert = () => {
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
    <div className={`modal-overlay ${isOpen.alertModalOpen ? 'active' : ''}`} ref={overlayRef} onClick={closeModal}>

      <div className={`modal modal-completed ${isOpen.alertModalOpen ? 'slide' : ''}`}>
        <div className="x-mark-container">
          <div className="x-mark"></div>
        </div>
        <h2>Please enter minimum pledge or more</h2>
        <div className="btn btn-alert" onClick={()=>setIsOpen({
        mainModalOpen: true,
        completedModalOpen: false,
        alertModalOpen:false
      })}>Go back</div>

      </div>
    
      </div>
  )
}

export default ModalAlert