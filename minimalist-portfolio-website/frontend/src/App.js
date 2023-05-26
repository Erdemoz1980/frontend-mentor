import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from './components/Footer';
import PortfolioIndex from './pages/PortfolioIndex';
import PortfolioDetails from './components/PortfolioDetails';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './helpers/ScrollToTop';

const App = () => {
  
  return (
    <Router>
      <ScrollToTop />
      <Navbar version='navbar-header' />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/portfolioindex' element={<PortfolioIndex />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/portfolio/:id' element={<PortfolioDetails />} />
      </Routes>
      <Footer />
    </Router>
  )
};

export default App
