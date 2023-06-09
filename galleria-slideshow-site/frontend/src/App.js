import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import PaintingCard from './components/PaintingCard';
import Modal from './components/Modal';
import galleryData from './gallery-data.json';

const App = () => {
  const [isSlideShowOn, setIsSlideShowOn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();
  const navigateRef = useRef();  
  navigateRef.current = navigate
  
  const startStopSlideShow = () => {
    if (!isSlideShowOn) {
      // If the slideshow is not currently running, trigger the first slide manually
      navigateRef.current(`/painting/${galleryData[currentIndex].id}`);
    }
    setIsSlideShowOn(prevState => !prevState);
  };
  
  useEffect(() => {
    let i = currentIndex;
    let intervalId
    if (isSlideShowOn) {
       intervalId = setInterval(() => {
         if (i > galleryData.length - 1 ) {
           setIsSlideShowOn(false)
           setCurrentIndex(0)
           navigateRef.current('/')
          return;
        }
        navigateRef.current(`/painting/${galleryData[i].id}`);
        i++
      }, 200);
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [isSlideShowOn, currentIndex]);


  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} painting={galleryData[currentIndex].heroLg} />
      <Navbar  setIsSlideShowOn={setIsSlideShowOn} startStopSlideShow={startStopSlideShow} isSlideShowOn={isSlideShowOn} setCurrentIndex={setCurrentIndex} />
      <Routes>
        <Route path='/' element={<Homepage galleryData={galleryData}/>} /> 
        <Route path='/painting/:id' element={<PaintingCard setIsOpen={setIsOpen} setCurrentIndex={setCurrentIndex} />} />
      </Routes>
    </>

  )
}

export default App