import {useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../slices/productSlice';
import ProductCard from "../components/ProductCard";
import Loader from '../components/Loader';

const ProductListPage = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [alert, setAlert] = useState('')
  
  const dispatch = useDispatch()
  const location = useLocation()
  const keyword = location.search.split('=')[1]
  const {products, isLoading, errMessage} = useSelector(state=>state.product)

  
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

  useEffect(() => {
        //Filter products based on category keyword if it exists
        let filteredProducts = products
        if (keyword) {
         filteredProducts = products.filter(product => {
            return (
              product.company === keyword ||
              product.gender === keyword ||
              product.category === keyword
            )
          })
          return setFilteredProducts(filteredProducts)
        }
        setFilteredProducts(products)   

  }, [keyword,products, dispatch]);
  
  return (
    <div className='product-page-wrapper'>
      {
        isLoading ? <Loader /> : errMessage ? <div className="temp">{errMessage}</div>: filteredProducts.map(product => (
          <ProductCard key={product._id} {...product} />
        ))
      }
    </div>
  )
};

export default ProductListPage