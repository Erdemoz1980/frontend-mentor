import Hero from '../components/Hero';
import About from '../components/About';


const HomePage = () => {
  return (
    <div className='home-page'>
      <Hero />
      <About />
      <section>
        <h2>Interested in doing a project together?</h2>
        <button className="btn btn-primary">Contact Me</button>
      </section>

    </div>
  )
}

export default HomePage