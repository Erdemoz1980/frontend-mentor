import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updatePassword, reset } from '../slices/userSlice';
import Alert from './Alert';

const ChangePassword = () => {
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword:'',
    newPasswordConfirm:''
  });
  const [passwordAlert, setPasswordAlert] = useState(false);

  const { oldPassword, newPassword, newPasswordConfirm } = passwordData;

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { userInfo, errMessage, success } = useSelector(state => state.user);

  useEffect(() => {
    if (!userInfo) {
      navigate('/')
    }
    if (success || errMessage) {
      setPasswordAlert(success ? 'You have successfully updated your password!' :  errMessage)
    }
    setTimeout(() => {
      setPasswordAlert(false)
      dispatch(reset())
    },5000)
  }, [userInfo, navigate, success, errMessage, dispatch])
  
  const onChangeHandler = (e) => {
    setPasswordData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (newPassword !== newPasswordConfirm) {
      setPasswordAlert('Passwords do not match!')
      setTimeout(() => {
        setPasswordAlert(false)
      }, 5000)
    } else {
      dispatch(updatePassword({_id:userInfo._id, oldPassword, newPassword}))
    }
  }

  return (
    <div className='container form-wrapper'>
      {passwordAlert  && <Alert message={passwordAlert} type={success ? 'success' :'error'} />}
      <h1>Enter New Password</h1>
      <form onSubmit={submitHandler} className='login-register-form'>
        <div className="form-group">
          <label htmlFor="oldPassword">Enter Old Password</label>
          <input type="password" name="oldPassword" id="oldPassword" value={oldPassword} onChange={onChangeHandler} required/>
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input type="password" name="newPassword" id="newPassword" value={newPassword} onChange={onChangeHandler} required/>
        </div>
        <div className="form-group">
          <label htmlFor="passwordConfirm">Confirm New Password</label>
          <input type="password" name="newPasswordConfirm" id="passwordConfirm" value={newPasswordConfirm} onChange={onChangeHandler} required/>
        </div>
        <button className="btn btn-submit">Submit</button>
      </form>
    </div>
  )
}

export default ChangePassword