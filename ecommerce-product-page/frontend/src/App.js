import { useState } from 'react';
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import data from './data.json';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navbar />
      <ProductPage data={data} cartItems={cartItems} setCartItems={setCartItems} />
      </>
  )
}

export default App