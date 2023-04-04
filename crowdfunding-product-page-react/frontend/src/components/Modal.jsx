import { useRef } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import ModalCardNoReward from './ModalCardNoReward';
import ModalCard from './ModalCard';

const Modal = () => {
  const { isOpen, setIsOpen, product} = useContext(GlobalContext);
  const overlayRef = useRef();



  const closeModal = (e) => {
    if (e.target === overlayRef.current) {
      setIsOpen(false)
    }
  }
  
  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} ref={overlayRef} onClick={closeModal}>
      <div className='modal'>
        <button className='modal-btn' onClick={() => setIsOpen(false)
        } ></button>
      <header className='modal-header'>
        <h1>Back this project</h1>
        <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
      </header>

      <>
          <ModalCardNoReward />
        {
          product.editions && product.editions.map(edition => (
            <ModalCard edition={edition} key={edition.id}/>
          ))
        }
      </>
      </div>
      </div>
  )
}

export default Modal