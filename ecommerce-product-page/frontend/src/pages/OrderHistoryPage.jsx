import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOrderList, setOrderList } from '../slices/orderSlice';
import OrderHistoryCard from '../components/OrderHistoryCard';
import Loader from '../components/Loader';

const OrderHistoryPage = () => {
  const [sortingOption, setSortingOption] = useState('Date');
  const [sortingDirection, setSortingDirection] = useState('asc');
  const { userInfo } = useSelector(state => state.user);
  const { isLoading, orderList } = useSelector(state => state.orderInfo);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!userInfo) {
      navigate('/')
    } else {
      dispatch(getOrderList(userInfo._id))
    }
  }, [userInfo, navigate, dispatch]);

  const handleSort = (e) => {
    const { name, value } = e.target;
    // Create a copy of the order list to avoid mutating the original state.
    let sortedList = [...orderList];
    const ascending = sortingDirection === 'asc'
     
    if (name === 'sorting-option') {
      setSortingOption(value)
      sortedList.sort((a, b) => {
        switch (value) {
          case 'Date':
            return ascending ? a.createdAt.localeCompare(b.createdAt) : b.createdAt.localeCompare(a.createdAt)
          case 'Total':
            return ascending ? a.totalPrice - b.totalPrice : b.totalPrice - a.totalPrice
          case 'Number-of-items':
            return ascending ? a.orderItems.length - b.orderItems.length : b.orderItems.length - a.orderItems.length
          default:
            return sortedList
        }
      })
    } else {
      setSortingDirection(value);
      sortedList.sort((a, b) => {
        switch (value) {
          case 'asc':
            return sortingOption === 'Date' ? a.createdAt.localeCompare(b.createdAt) :
              sortingOption === 'Total' ? a.totalPrice - b.totalPrice
                : a.orderItems.length - b.orderItems.length
          case 'desc':
            return sortingOption === 'Date' ? b.createdAt.localeCompare(a.createdAt) :
              sortingOption === 'Total' ? b.totalPrice - a.totalPrice
                : b.orderItems.length - b.orderItems.length
          default:
            return sortedList
        }
      })
    }
     dispatch(setOrderList(sortedList))
  }
   
      
  const radioButtons = [{ id:1000 ,value: 'Date' }, {id:1001, value: 'Total' }, { id:1002, value: 'Number-of-items' }]

  return (
    <div className="container order-history-page-wrapper">
      <h1>Order History</h1>
      <section className="sort-container">
        <p>Sort Orders</p>
        <div className="filter-options-wrapper">
          {
            radioButtons.map(item => (
              <div key={item.id} className="filter-options-form-group">
                <label htmlFor={item.value}>{item.value}</label>
                <input checked={item.value===sortingOption} type="radio" name='sorting-option' id={item.value} value={item.value} onChange={handleSort} />
              </div>
            ))
          }
        </div>
        <div className="sort-wrapper">
          <select defaultValue={sortingDirection} name="sorting-direction" id="" onChange={handleSort}>
          <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
           
          </select>
        </div>
      </section>
      {
        isLoading ? <Loader /> : !orderList ? <h3>No orders found </h3> : (
          orderList?.map(order => (
            <OrderHistoryCard key={order._id} {...order} />
          ))
        )
      }
    </div>
  )
};

export default OrderHistoryPage