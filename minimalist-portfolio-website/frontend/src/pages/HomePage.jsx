import { useRef } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import CTAContactMe from '../components/CTAContactMe';

const HomePage = () => {
  const aboutSectionRef = useRef(null);

  const handleScroll = () => {
   aboutSectionRef.current.scrollIntoView({behavior:'smooth'})
 }

  return (
    <div>
      <div className="container">
        <Hero handleScroll={handleScroll} />
        <About sectionRef={aboutSectionRef} />
        <CTAContactMe />
      </div>
    </div>
  )
}

export default HomePage