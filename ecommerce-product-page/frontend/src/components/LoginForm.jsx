import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { login } from '../slices/userSlice';
import Alert from './Alert';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email:'',
    password:'',
    passwordConfirm:''
  });
  const [alert, setAlert] = useState(false);

  const { email, password, passwordConfirm } = formData;

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { userInfo, message, isError } = useSelector(state => state.user);

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  },[navigate, userInfo])

  const onChangeHandler = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(formData).every(value => value !== '')
    if (!isFormValid) {
      setAlert('All fields are required!')
    } else {
      if (password !== passwordConfirm) {
        return setAlert('Passwords do not match!')
      }
      dispatch(login({email, password}));
      setAlert(false)
    }
  };

  return (
    <div className='container form-wrapper'>
      {(alert || isError) && <Alert message={alert ? alert : message} />}
      <h1>Sign In</h1>
      <form onSubmit={submitHandler} className='login-register-form'>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={email} onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={password} onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input type="password" name="passwordConfirm" id="passwordConfirm" value={passwordConfirm} onChange={onChangeHandler} />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      <div className="form-redirect-wrapper">
        <p>Not registered? Register <Link to='/register'>here</Link></p>
      </div>
    </div>
  )
}

export default LoginForm