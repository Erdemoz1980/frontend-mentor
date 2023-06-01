import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PortfolioIndex from './pages/PortfolioIndex';
import PortfolioDetails from './components/PortfolioDetails';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './helpers/ScrollToTop';

const App = () => {
  
  return (
    <Router>
      <ScrollToTop />
      <Navbar version='nav-header'/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/portfolioindex' element={<PortfolioIndex />} />
        <Route path='/portfolio/:id' element={<PortfolioDetails />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Navbar version='navbar-footer' />
    </Router>
  )
};

export default App
