
const ContactForm = ({ formData, setFormData }) => {
  const { name, email, message } = formData
   
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData)
  }

  return (
    <div className="container">
      <div className="contact-form-wrapper">
        <h2>Contact Me</h2>
        
        <form className="contact-form" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={name} placeholder="Please enter your name" onChange={(e) => setFormData(prevState => ({ ...prevState, name: e.target.value }))} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={email} placeholder='Please enter your email address' onChange={(e) => setFormData(prevState => ({ ...prevState, email: e.target.value }))} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" value={message} placeholder="How can I help?" onChange={(e) => setFormData(prevState => ({ ...prevState, message: e.target.value }))} ></textarea>
          </div>
       
          <button type="submit" className="btn btn-main">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm