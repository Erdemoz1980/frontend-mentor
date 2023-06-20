import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import data from './data.json';

const App = () => {
  return (
    <>
      <Navbar />
      <ProductPage data={data} />
      </>
  )
}

export default App