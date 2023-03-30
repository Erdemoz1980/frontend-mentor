import ModalCardNoReward from './ModalCardNoReward';
import ModalCard from './ModalCard';

const Modal = ({ editions }) => {
  
  return (
    <div className="modal-overlay">
    <div className='modal'>
      <header className='modal-header'>
        <h1>Back this project</h1>
        <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        {/*<button className="close-btn">x</button>*/}
      </header>

      <div className="modal-card-container">
        <ModalCardNoReward />
        {
          editions.map(edition => (
            <ModalCard edition={edition} key={edition.id} />
          ))
        }
      </div>
      </div>
      </div>
  )
}

export default Modal