import { useContext, useEffect,useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const SuccessModal = () => {
  const [isModalClosing, setIsModalClosing] = useState(false)
  const { name, isModalOpen, setIsModalOpen } = useContext(GlobalContext);

  useEffect(() => {
    if (!isModalOpen && isModalClosing) {
      setTimeout(() => {
       setIsModalClosing(false)
     },250)
   }
 },[isModalClosing, isModalOpen])

  
  const handleCloseModal = () => {
    setIsModalClosing(true)
    setTimeout(() => {
      setIsModalOpen(false)
    },100)
  }

  return (
    <div className={`success-modal-wrapper ${isModalOpen ? 'open' : isModalClosing ? 'closing' : ''}`} onClick={handleCloseModal}>
      <div className="success-modal-inner-wrapper">
        <p>Hello {name.split(' ')[0]},</p>
        <p className="modal-text">I've received your message and will be in touch soon. Thank you for your interest in my work, and I'm excited to discuss how I can help you with your web development needs.  Looking forward to connecting with you!
        </p>
        <div className="modal-signature">
          <p>Best regards,</p>
          <p>Erdem Ozdemir</p>
          <p>Front End Developer || React & Express</p>
        </div>
        <button className="btn btn-primary" onClick={()=>setIsModalOpen(false)}>Close</button>
      </div>
    </div>
  )
};

export default SuccessModal