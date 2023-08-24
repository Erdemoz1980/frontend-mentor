import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOrderList } from '../slices/orderSlice';
import OrderHistoryCard from '../components/OrderHistoryCard';




const OrderHistoryPage = () => {
  const { userInfo } = useSelector(state => state.user);
  const { orderList } = useSelector(state => state.orderInfo);
  const navigate = useNavigate()
  const dispatch = useDispatch()


  useEffect(() => {
    if (!userInfo) {
     navigate('/')
    } else {
      dispatch(getOrderList(userInfo._id))
    }
    
 },[userInfo, navigate, dispatch])



  return (
    <div className="container order-history-page-wrapper">
      <h1>Order History</h1>
      {
        !orderList  ? <h3>No orders found </h3> : (
          orderList.map(order => (
            <OrderHistoryCard key={order._id} {...order} />
          ))
        )
      }
    </div>
  )
}

export default OrderHistoryPage