import ModalCardNoReward from './ModalCardNoReward';
import ModalCard from './ModalCard';

const Modal = ({ editions, isOpen, setIsOpen }) => {

  
  const overlayStyle = {
    opacity: isOpen ? '1' : '0',
    visibility:isOpen ? 'visible':'hidden'
 }

  return (
    <div className="modal-overlay" style={overlayStyle}>
      <div className='modal'>
        <button onClick={() => setIsOpen(false)
        } className='modal-btn'></button>
      <header className='modal-header'>
        <h1>Back this project</h1>
        <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
      </header>

      <div className="modal-card-container">
        <ModalCardNoReward isOpen={isOpen} />
        {
          editions.map(edition => (
            <ModalCard edition={edition} key={edition.id} isOpen={isOpen} />
          ))
        }
      </div>
      </div>
      </div>
  )
}

export default Modal