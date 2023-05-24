import Hero from '../components/Hero';
import About from '../components/About';


const HomePage = () => {
  return (
    <div>
      <div className="container">
        <Hero />
        <About />
      </div>
    </div>
  )
}

export default HomePage