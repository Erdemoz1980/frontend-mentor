import { useState } from 'react';
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import data from './data.json';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Navbar setIsCartOpen={setIsCartOpen} cartItems={cartItems} />
      <ProductPage data={data} cartItems={cartItems} setCartItems={setCartItems} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      </>
  )
}

export default App