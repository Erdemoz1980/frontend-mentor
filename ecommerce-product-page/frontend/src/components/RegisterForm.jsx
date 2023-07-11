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
    address: '',
  });
  const [alert, setAlert] = useState(false);

  const { name, lastName, email, password, passwordConfirm, address } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { userInfo, isError, isSuccess, isLoading, message } = useSelector(state => state.user)
  
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
  
  const submitHandler = async (e) => {
    e.preventDefault();
    const isFormValid = Object.values(formData).every(value => value !== '');
    if (!isFormValid) {
      return setAlert('All fields must be filled out!')
    }
    if (password !== passwordConfirm) {
      return setAlert('Passwords do not match!')
    }
    setAlert(false)
   dispatch(register({name, lastName, email, password, passwordConfirm, address}))
  }

//If we're logged in already, we should get re-directed to product page.


  return (
    <div className='container form-wrapper'>
      {alert && <Alert message={alert} />}
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
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea name="address" id="address" cols="20" rows="5" value={address} onChange={onChangeHandler}></textarea>
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