import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const SuccessModal = () => {
  const { name, isModalOpen, setIsModalOpen } = useContext(GlobalContext);
  return (
    <div className={`success-modal-wrapper ${isModalOpen ? 'open' : ''}`} onClick={()=>setIsModalOpen(false)}>
      <div className="success-modal-inner-wrapper">
        <p>Hello {name},</p>
        <p>I've received your message and will be in touch soon. Thank you for your interest in my work, and I'm excited to discuss how I can help you with your web development needs.</p>
        <p>Looking forward to connecting with you!</p>
        <p>Best regards,</p>
        <p>Erdem Ozdemir</p>
        <p>Front End Developer || React & Express</p>
      </div>
    </div>
  )
}

export default SuccessModal