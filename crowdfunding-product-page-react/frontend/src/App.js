import { GlobalProvider } from './context/GlobalState';
import ProductPage from './pages/ProductPage';

const App = () => {

  return (
    <GlobalProvider>
            <ProductPage />
    </GlobalProvider>
      
  )
}

export default App