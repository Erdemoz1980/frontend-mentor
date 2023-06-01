import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GetinTouch from "../components/GetinTouch"
import ContactForm from '../components/ContactForm';

const ContactPage = ({ setActivePage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const location = useLocation();

  useEffect(() => {
    setActivePage(location)
  }, [location, setActivePage])


  return (
    <div className='container'>
      <GetinTouch />
      <ContactForm formData={formData} setFormData={setFormData} />
    </div>
  )
};

export default ContactPage