import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { register, logout } from '../slices/userSlice';
import Alert from './Alert';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName:'',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [address, setAddress] = useState({
    streetNo: '',
    streetName: '',
    postalCode: '',
    province: '',
    country: 'Canada'
  });
  const [alert, setAlert] = useState(false);

  const { name, lastName, email, password, passwordConfirm } = formData
  const { streetNo, streetName, postalCode, province, country } = address
  const provinces = ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'ON', 'PE', 'QC', 'SK'];

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { userInfo, errMessage } = useSelector(state => state.user)

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  },[userInfo, navigate])

  const onChangeHandler = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  const addressHandler = (e) => {
    setAddress(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };
  
  const submitHandler = async (e) => {
    e.preventDefault();
    const isFormValid = Object.values(formData).every(value => value !== '');
    const isAddressValid = Object.values(address).every(value=>value!=='')
    if (!isFormValid && !isAddressValid) {
      return setAlert('All fields must be filled out!')
    }
    if (password !== passwordConfirm) {
      return setAlert('Passwords do not match!')
    }
    setAlert(false)
    console.log({name, lastName, email, password, passwordConfirm, address})
   dispatch(register({name, lastName, email, password, passwordConfirm, address}))
  }

  return (
    <div className='container form-wrapper'>
      {(alert || errMessage) && <Alert message={alert ? alert : errMessage} />}
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler} className='login-register-form'>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={name} onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" value={lastName}  onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={email} onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={password} onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="passwordConfirm" id="confirmPassword" value={passwordConfirm} onChange={onChangeHandler} />
        </div>
        <div className="form-group-address">
           <h4>Address</h4>
          
          <div className="form-group">
          <label htmlFor="streetNo">Street No</label>
          <input type="text" name="streetNo" id="streetNo" value={streetNo} onChange={addressHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="streetName">Unit no & Street Name</label>
          <input type="text" name="streetName" id="streetName" value={streetName} onChange={addressHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code</label>
          <input type="text" name="postalCode" id="postalCode" value={postalCode} onChange={addressHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="province">Province</label>
          <select name="province" id="province" value={province} onChange={addressHandler}>
            {provinces.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input type="text" name="country" id="country" value={country} readOnly />
        </div>
          
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
      <div className="form-redirect-wrapper">
      <p>Already registered? Sign in <Link to='/login' className='redirect-link'>here</Link></p>
      </div>
      </div>
  )
}

export default RegisterForm