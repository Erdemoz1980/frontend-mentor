import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from './components/Footer';
import PortfolioIndex from './pages/PortfolioIndex';
import ContactPage from './pages/ContactPage';

const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar version='navbar-header' />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/portfolioindex' element={<PortfolioIndex />}  />
        <Route path='/contact' element={<ContactPage />}  />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};

export default App
