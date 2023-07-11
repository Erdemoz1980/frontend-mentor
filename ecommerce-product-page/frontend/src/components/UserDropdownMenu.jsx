import { useDispatch } from 'react-redux';
import { logout } from '../slices/userSlice';
import { Link } from 'react-router-dom';

const UserDropdownMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className="user-dropdown-menu-wrapper">
      <ul className='user-dropdown-menu'>
        <li onClick={()=>dispatch(logout())} >Logout</li>
        <li><Link to='/userOrders'>Your Orders</Link></li>
        <li><Link to='/user/profile/:id'>Your Account</Link></li>
        <li><Link to='/user/profile/:id'>Your Recommendations</Link></li>
      </ul>
    </div>
  )
}

export default UserDropdownMenu