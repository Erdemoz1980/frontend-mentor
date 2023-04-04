import data from './data.json';
import { GlobalProvider } from './context/GlobalState';
import ProductPage from './pages/ProductPage';

const App = () => {

  return (
    <GlobalProvider>
        {
          data.map(product => (
            <ProductPage product={product} key={product.id} />
          ))
      }
    </GlobalProvider>
      
  )
}

export default App