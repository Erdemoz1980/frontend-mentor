import { useState } from 'react';
import GetinTouch from "../components/GetinTouch"
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message:''
})

  return (
    <div className='container'>
      <GetinTouch />
      <ContactForm formData={formData} setFormData={setFormData} />
    </div>
  )
}

export default ContactPage