import { useRef } from 'react';
import ModalCardNoReward from './ModalCardNoReward';
import ModalCard from './ModalCard';

const Modal = ({ editions, isOpen, setIsOpen, selectedEdition, setSelectedEdition }) => {
  const overlayRef = useRef();

  const overlayStyle = {
    opacity: isOpen ? '1' : '0',
    visibility:isOpen ? 'visible':'hidden'
 }

  const closeModal = (e) => {
    if (e.target === overlayRef.current) {
      setIsOpen(false)
    }
  }
  
  return (
    <div className="modal-overlay" ref={overlayRef} style={overlayStyle} onClick={closeModal}>
      <div className='modal'>
        <button className='modal-btn' onClick={() => setIsOpen(false)
        } ></button>
      <header className='modal-header'>
        <h1>Back this project</h1>
        <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
      </header>

      <div className="modal-card-container">
          <ModalCardNoReward isOpen={isOpen} selectedEdition={selectedEdition} setSelectedEdition={setSelectedEdition} />
        {
          editions.map(edition => (
            <ModalCard edition={edition} key={edition.id} isOpen={isOpen} selectedEdition={selectedEdition} setSelectedEdition={setSelectedEdition} />
          ))
        }
      </div>
      </div>
      </div>
  )
}

export default Modal