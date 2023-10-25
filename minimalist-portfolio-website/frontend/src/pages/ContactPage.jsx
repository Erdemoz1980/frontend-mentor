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
  const location = useLocation()


  useEffect(() => {
    setActivePage(location)
  }, [location, setActivePage])


  return (
    <>
      <GetinTouch />
      <ContactForm formData={formData} setFormData={setFormData} />
      </>
  )
};

export default ContactPage