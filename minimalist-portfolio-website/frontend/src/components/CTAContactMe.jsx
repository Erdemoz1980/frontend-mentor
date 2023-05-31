import { Link } from 'react-router-dom';

const Footer = () => {
  return (

      <div className="container">
        <section className="cta-wrapper">
          <div className="cta-text-box">
            <h2>Interested in doing a project together?</h2>
          </div>
          <div className="connecting-line"></div>
          <Link to='/contact'>
            <button className="btn btn-secondary btn-action">Contact Me</button>
          </Link>
      </section>
      </div>

  )
}

export default Footer