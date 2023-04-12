import circles from '../images/pattern-circles.svg'

const Header = () => {
  return (
    <header className='header'>
      <h1 className="header-title">Simple, traffic-based pricing</h1>
      <p className="header-sub text">Sign-up for our 30-day trial. No credit card required.</p>
      <img src={circles} alt="circles" className="circles" />
    </header>
  )
}

export default Header