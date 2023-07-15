import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import ProductDetail from './components/ProductDetail';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import AccountPage from './pages/AccountPage';
import EditProfilePage from './pages/EditProfilePage';
import ChangePassword from './components/ChangePassword';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='/product/:id/:colorVersion' element={<ProductDetail />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<LoginForm />} /> 
        <Route path='/user/account/:id' element={<AccountPage />} />
        <Route path='/user/account/editaddress/' element={<EditProfilePage />} />
        <Route path='/user/account/changepassword/' element={<ChangePassword />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App