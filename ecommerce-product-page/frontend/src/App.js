import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import ProductDetail from './components/ProductDetail';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import EditProfilePage from './pages/EditProfilePage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import CheckoutPage from './pages/CheckoutPage';
import PaymentPage from './pages/PaymentPage';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductListPage />} />
        <Route path='/product/:id/:colorVersion' element={<ProductDetail />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} /> 
        <Route path='/user/account/:id' element={<AccountPage />} />
        <Route path='/user/account/editaddress/' element={<EditProfilePage />} />
        <Route path='/user/account/changepassword/' element={<ChangePasswordPage />} />
        <Route path='/user/checkout' element={<CheckoutPage />} />
        <Route path='/order/payment' element={<PaymentPage />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App