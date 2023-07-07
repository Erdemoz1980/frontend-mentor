import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import ProductDetail from './components/ProductDetail';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='/product/:id/:colorVersion' element={<ProductDetail />} />
        <Route path='/' element={<ProductPage />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App