import Navbar from "./Navbar";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <section className="cta-wrapper">
          <div className="cta-text-box">
            <h2>Interested in doing a project together?</h2>
          </div>
          <div className="connecting-line"></div>
        <button className="btn btn-secondary btn-action">Contact Me</button>
      </section>
      </div>
    
      <Navbar/>
    </footer>
  )
}

export default Footer