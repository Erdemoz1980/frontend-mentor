import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import Lightbox from "./components/Lightbox";
import data from './data.json';

const App = () => {

  return (
    <>
      <Lightbox data={data} />
      <Navbar />
      <ProductPage data={data}/>
      </>
  )
}

export default App