import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PortfolioIndex from './pages/PortfolioIndex';
import PortfolioDetails from './components/PortfolioDetails';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './helpers/ScrollToTop';
import SuccessModal from './components/SuccessModal';
import { GlobalProvider } from './context/GlobalState';
import FetchDataPractice from './components/FetchDataPractice';

const App = () => {
  const [activePage, setActivePage] = useState('');
 
  return (
    <GlobalProvider>
      <SuccessModal />
      <Router>
        <ScrollToTop />
        <Navbar version='nav-header' activePage={activePage.pathname} />
        <Routes>
          <Route path='/' element={<HomePage setActivePage={setActivePage} />} />
          <Route path='/fetch' element={<FetchDataPractice />} />
          <Route path='/portfolioindex' element={<PortfolioIndex setActivePage={setActivePage} />} />
          <Route path='/portfolio/:id' element={<PortfolioDetails setActivePage={setActivePage} />} />
          <Route path='/contact' element={<ContactPage setActivePage={setActivePage} />} />
        </Routes>
        <Navbar version='navbar-footer' activePage={activePage.pathname} />
      </Router>
    </GlobalProvider>
  )
};

export default App
