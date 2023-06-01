import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import CTAContactMe from '../components/CTAContactMe';

const HomePage = ({setActivePage}) => {
  const aboutSectionRef = useRef(null);
  const location = useLocation();
  
  useEffect(() => {
    setActivePage(location)
  }, [location,setActivePage]);


 

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