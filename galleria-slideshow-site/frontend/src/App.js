import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import PaintingCard from './components/PaintingCard';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} /> 
        <Route path='/painting/:id' element={<PaintingCard />} />
      </Routes>
    </Router>

  )
}

export default App