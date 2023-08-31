import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOrderList } from '../slices/orderSlice';
import OrderHistoryCard from '../components/OrderHistoryCard';
import Loader from '../components/Loader';
import IconArrowUp from '../components/IconArrowUp';
import IconArrowDown from '../components/IconArrowDown'


const OrderHistoryPage = () => {
  const [sortData, setSortData] = useState({
    date: false,
    total: false,
    numberOfItems:false
  })
  const { date, total, numberOfItems } = sortData;
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
 },[userInfo, navigate, dispatch])

  const handleSort = (e) => {
    const { name } = e.target
    setSortData({
      date: name === 'date',
      total: name === 'total',
      numberOfItems:name==='number-of-items'
    })
  }


  return (
    <div className="container order-history-page-wrapper">
      <h1>Order History</h1>
      <section className="sort-container">
        <p>Filter Orders</p>
        <div className="filter-options-wrapper">
          <div className="filter-options-form-group">
            <label htmlFor="date">Date</label>
            <input type="radio" name='date' id='date' value={date} checked={date} onChange={handleSort} />
          </div>
          <div className="filter-options-form-group">
            <label htmlFor="total">Total</label>
            <input type="radio" name="total" id="total" value={total} checked={total} onChange={handleSort} />
          </div>
          <div className="filter-options-form-group">
            <label htmlFor="number-of-items">Number of items</label>
            <input type="radio" name="number-of-items" id="number-of-items" value={numberOfItems} checked={numberOfItems} onChange={handleSort} />
          </div>
        </div>
        <div className="sort-icons-wrapper">
          <IconArrowDown />
          <IconArrowUp />
        </div>
      </section>
      {
       isLoading ? <Loader /> : !orderList  ? <h3>No orders found </h3> : (
          orderList?.map(order => (
            <OrderHistoryCard key={order._id} {...order} />
          ))
        )
      }
    </div>
  )
}

export default OrderHistoryPage