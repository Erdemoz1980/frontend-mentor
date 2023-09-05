import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOrderList, setOrderList } from '../slices/orderSlice';
import OrderHistoryCard from '../components/OrderHistoryCard';
import Loader from '../components/Loader';

const OrderHistoryPage = () => {
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
  
    console.log(value)
    let sortedList = [...orderList];
    const ascending = value === 'asc';
  
    switch (name) {
      case 'sorting-option':
        switch (value) {
          case 'Date':
            sortedList.sort((a, b) =>
              ascending
                ? a.createdAt.localeCompare(b.createdAt)
                : b.createdAt.localeCompare(a.createdAt)
            );
            break;
          case 'Total':
            sortedList.sort((a, b) =>
              ascending ? a.totalPrice - b.totalPrice : b.totalPrice - a.totalPrice
            );
            break;
          case 'Number of items':
            sortedList.sort((a, b) =>
              ascending
                ? a.orderItems.length - b.orderItems.length
                : b.orderItems.length - a.orderItems.length
            );
            break;
          default:
            return;
        }
        break;
      case 'sorting-direction':
        // Reverse the list if 'Descending' is selected
        if (value === 'desc') {
          sortedList.reverse();
        }
        break;
      default:
        return;
    }
  
    // Update the order list in your Redux store or component state
    dispatch(setOrderList(sortedList));
  };
  
  const radioButtons = [{ value: 'Date' }, { value: 'Total' }, { value: 'Number of items' }]

  return (
    <div className="container order-history-page-wrapper">
      <h1>Order History</h1>
      <section className="sort-container">
        <p>Sort Orders</p>
        <div className="filter-options-wrapper">
          {
            radioButtons.map((item, index) => (
              <div key={index} className="filter-options-form-group">
                <label htmlFor={item.value}>{item.value}</label>
                <input type="radio" name='sorting-option' id={item.value} value={item.value} onChange={handleSort} />
              </div>
            ))
          }
        </div>
        <div className="sort-wrapper">
          <select name="sorting-direction" id="" onChange={handleSort}>
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