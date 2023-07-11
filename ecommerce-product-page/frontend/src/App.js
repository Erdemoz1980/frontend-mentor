import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import ProductDetail from './components/ProductDetail';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='/product/:id/:colorVersion' element={<ProductDetail />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<LoginForm />} /> 
      </Routes>
      </BrowserRouter>
  )
}

export default App