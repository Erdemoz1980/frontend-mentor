import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ContactForm = ({ formData, setFormData }) => {
  const [alert, setAlert] = useState({
    name:false,
    email: false,
    message:false
  });
  const { name, email, message } = formData;
  const { setIsModalOpen, setName } = useContext(GlobalContext)

  const API_EMAIL = 'https://erdemoz-io-659240e6c6f7.herokuapp.com/api/send-email'
   
  const submitHandler = async (e) => {
    e.preventDefault();

    const updatedAlert = {
      name: name === '',
      email: email === '',
      message: message === ''
    };

    setAlert({ ...alert, ...updatedAlert });
    if (Object.values(updatedAlert).every(field => field === false)) {
     
      try {
        const response = await fetch(API_EMAIL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        const data = await response.json();
        if (data.success) {
          setIsModalOpen(true)
          setName(name)
          setFormData({ name: '', email: '', message: '' })
        }
      } catch (err) {
       
      }
    }
  };

  return (
    <div className="container">
      <div className="contact-form-wrapper">
        <h2>Contact Me</h2>        
        <form className="contact-form" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" aria-describedby='name-error' className={`${alert.name ? 'alert' : ''}`} value={name} placeholder="Please enter your name"
              onChange={(e) => {
                setFormData(prevState => ({ ...prevState, name: e.target.value }));
                setAlert(prevState=>({...prevState,name:false}))
              }} />
            {alert.name && <small id='name-error'>Name field is required</small>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" aria-describedby='email-error' className={`${alert.email ? 'alert' : ''}`} value={email} placeholder='Please enter your email address'
              onChange={(e) => {
                setFormData(prevState => ({ ...prevState, email: e.target.value }));
                setAlert(prevState=>({...prevState, email:false}))
              }} />
            {alert.email && <small id='email-error'>Email field is required</small>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" aria-describedby='message-error' className={`${alert.message ? 'alert' : ''}`} value={message} placeholder="How can I help?"
              onChange={(e) => {
                setFormData(prevState => ({ ...prevState, message: e.target.value }));
                setAlert(prevState=>({...prevState, message:false}))
              }} ></textarea>
              {alert.message && <small id='message-error'>Please include a message</small>}
          </div>
       
          <button type="submit" className="btn btn-main">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm