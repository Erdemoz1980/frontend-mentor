import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const [products, setProducts] = useState([])
  const [alert, setAlert] = useState('');

  useEffect(() => {
    const fetchData =async()=> {
      try {
        const response = await fetch('http://localhost:8000/api/products')
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        setAlert(error)
      }
    }
    fetchData()
  }, [])
  
  
  return (
    <div className='product-page-wrapper'>
      {
        alert ? <div>Alert!</div> : products.map(product => (
          <ProductCard key={product._id} {...product} />
        ))
      }
    </div>
  )
};

export default ProductPage