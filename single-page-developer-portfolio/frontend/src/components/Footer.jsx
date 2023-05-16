import { useState } from 'react';
import gitIcon from '../assets/images/icon-github.svg';
import frontEndIcon from '../assets/images/icon-frontend-mentor.svg';
import linkedinIcon from '../assets/images/icon-linkedin.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;
 
  function onChangeHandler(e) {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  function submitHandler(e) {
    e.preventDefault()
    console.log(formData)
  }


  return (
    <section className='footer-container'>
      <div className="container-bg">
      <div className="contact-grid border">
        <div className="contact-section">
          <h1 className='main-title'>Contact</h1>
          <p>I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
        </div>

        <form className='contact-form' onSubmit={submitHandler}>
            <input type="text" name="name" value={name} placeholder='NAME' onChange={onChangeHandler} />
            <input type="email" name="email" value={email} placeholder='EMAIL' onChange={onChangeHandler} />
            <textarea value={message} name="message" id="" cols="30" rows="5" placeholder='MESSAGE' onChange={onChangeHandler} ></textarea>
         <button type='submit' className='btn'>Send Message</button>
         <button  className='btn clear'>Clear Fields</button>
        </form>
      </div>
      <footer>
        <h3 className="logo">erdemoz</h3>
        <div className="profile">
          <img src={gitIcon} alt="github" />
          <img src={frontEndIcon} alt="frontend Mentor" />
          <img src={linkedinIcon} alt="linkedin" />
          <img src={twitterIcon} alt="github" />
        </div>
      </footer>
      </div>
    </section>
  )
}

export default Footer