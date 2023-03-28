import data from './data.json';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';

const App = () => {

  return (
    <>
        {
          data.map(product => (
            <ProductPage product={product} key={product.id} />
          ))
        }
    </>
      
  )
}

export default App