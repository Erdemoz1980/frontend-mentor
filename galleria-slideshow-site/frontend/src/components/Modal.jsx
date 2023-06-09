
const Modal = ({isOpen, setIsOpen, painting}) => {
  return (
    <div onClick={() => setIsOpen(false)} className={`modal-overlay ${isOpen ? 'active' : ''}`}>
      <div className="modal-image-container">
        <img src={painting} alt='modal painting' />
        {/*<button className="btn btn-modal btn-close">Close</button>*/}
      </div>
    </div>
  )
}

export default Modal