import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import ProductDetail from './components/ProductDetail';
import data from './data.json';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductPage data={data} />} />
        <Route path='/product/:id/:colorVersion' element={<ProductDetail />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App