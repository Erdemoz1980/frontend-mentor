import { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOrderList, setOrderList } from '../slices/orderSlice';
import OrderHistoryCard from '../components/OrderHistoryCard';
import Loader from '../components/Loader';

const OrderHistoryPage = () => {
  const [sortingData, setSortingData] = useState({
    option: 'Date',
    direction: 'asc',
    source: 'radio'
  });
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

    setSortingData(prevState => ({
      ...prevState,
      source:name.split('.')[0],
      [name.split('.')[1]]: value
    }))

    const ascending = sortingData.direction === 'asc';

    let sortedList = [...orderList]

    const sortOptions = {
      Date: (a, b) => ascending ? a.createdAt.localeCompare(b.createdAt) : b.createdAt.localeCompare(a.createdAt),
      Total: (a, b) => ascending ? a.totalPrice - b.totalPrice : b.totalPrice - a.totalPrice,
      NumberOfItems: (a, b) => ascending ? a.orderItems.length - b.orderItems.length : b.orderItems.length - a.orderItems.length
    };
  
    const sortDirections = {
      asc: (a, b) => sortOptions[sortingData.option](a, b),
      desc: (a, b) => sortOptions[sortingData.option](b, a)
    };

    if (sortingData.source === 'radio') {
       dispatch(setOrderList(sortedList.sort(sortOptions[sortingData.option])))
    } else {
      dispatch(setOrderList(sortedList.sort(sortDirections[sortingData.direction])))
    }

  };


  //Separating rendering logic from data.
  const radioButtons = [{ id:1000 ,value: 'Date' }, {id:1001, value: 'Total' }, { id:1002, value: 'NumberOfItems' }]

  return (
    <div className="container order-history-page-wrapper">
      <h1>Order History</h1>
      <section className="sort-container">
        <p>Sort Orders</p>
        <div className="filter-options-wrapper">
          {
            radioButtons.map(item => (
              <div key={item.id}  className="filter-options-form-group">
                <label htmlFor={item.value}>{item.value}</label>
                <input checked={item.value === sortingData.option} type="radio" name='radio.option' id={item.value} value={item.value}
                  onChange={handleSort} />
              </div>
            ))
          }
        </div>
        <div className="sort-wrapper">
          <select name="select.direction" defaultValue={sortingData.direction} onChange={handleSort}>
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