import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import ProductDetail from './components/ProductDetail';
import Lightbox from "./components/Lightbox";
import data from './data.json';

const App = () => {

  return (
    <BrowserRouter>
      <Lightbox data={data} />
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductPage data={data} />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App