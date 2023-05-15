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
    
  }

  function submitHandler(e) {
    e.preventDefault();
  }


  return (
    <div className='contact-container'>
      <div className="container">
      <div className="contact-grid">
        <div className="contact-section">
          <h1>Contact</h1>
          <p>I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
        </div>

        <form onSubmit={submitHandler}>
            <input type="text" value={name} />
            <input type="email" value={email} />
            <textarea value={message} id="" cols="30" rows="10"></textarea>
         <button type="submit" className='btn'>Send Message</button>
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
    </div>
  )
}

export default Footer