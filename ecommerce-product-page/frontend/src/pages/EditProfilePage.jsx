import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';
import { updateUser, reset } from '../slices/userSlice';
import { Link } from 'react-router-dom';

const EditPropfilePage = () => {
  const { userInfo, errMessage, success } = useSelector(state => state.user);

  const [userData, setUserData] = useState({
    _id:'',
    name:'',
    lastName:'',
    address: {
      streetNo: '',
      streetName:  '',
      postalCode: '',
      province: '',
      country: ''
    }
  });
  const [profileAlert, setProfileAlert] = useState(false)

  const { name, lastName, address: { streetNo, streetName, postalCode, province, country } } = userData;

  const provinces = ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'ON', 'PE', 'QC', 'SK'];

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!userInfo) {
      navigate('/')
    }
    if (success || errMessage) {
      setProfileAlert(success ? 'You have successfully updated your password!' : errMessage)
    }
  
    if (userInfo) {
      setUserData({
        _id: userInfo._id,
        name: userInfo.name,
        lastName: userInfo.lastName,
        email: userInfo.email,
        password: userInfo.password,
        address: {
          streetNo: userInfo?.address?.streetNo,
          streetName: userInfo?.address?.streetName,
          postalCode: userInfo?.address?.postalCode,
          province: userInfo?.address?.province,
          country:userInfo.address?.country
        }
      })
    };

    return () => {
      dispatch(reset());
    };
  }, [navigate, userInfo, dispatch, errMessage, success])


  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    
    if (name.startsWith('address')) {
      const addressField = name.split('.')[1]
      setUserData(prevState => ({
        ...prevState,
        address: {
          ...userData.address,
          [addressField]: value
        }
      }))
    } else {
      setUserData(prevState => ({
        ...prevState,
        [name]:value
      }))
    }
 }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateUser(userData))  

  }
  
  return (
    <div className='container form-wrapper'>
      <Link to={`/user/account/${userInfo._id}`}><button className='btn btn-navigate btn-navigate-profile'>Go Back</button></Link>
      {profileAlert && <Alert message={profileAlert} type={success ? 'success' :'error'} />}
      <h1>Edit Profile</h1>
      <form onSubmit={submitHandler} className='login-register-form'>
      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={name} onChange={onChangeHandler} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" value={lastName} onChange={onChangeHandler} required />
        </div>
        <div className="form-group">
          <label htmlFor="streetNo">Street No</label>
          <input type="text" name="address.streetNo" id="streetNo" value={streetNo} onChange={onChangeHandler} required />
        </div>
        <div className="form-group">
          <label htmlFor="streetName">Unit no & Street Name</label>
          <input type="text" name="address.streetName" id="streetName" value={streetName} onChange={onChangeHandler} required />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code</label>
          <input type="text" name="address.postalCode" id="postalCode" value={postalCode} onChange={onChangeHandler} required/>
        </div>
        <div className="form-group">
          <label htmlFor="province">Province</label>
          <select name="address.province" id="province" value={province} onChange={onChangeHandler} required>
            {provinces.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>

        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input type="text" name="country" id="country" value={country} readOnly />
        </div>
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  )
};

export default EditPropfilePage