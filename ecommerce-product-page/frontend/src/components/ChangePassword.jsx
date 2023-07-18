import { useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updatePassword, reset } from '../slices/userSlice';
import Alert from './Alert';
import EyeClosedIcon from './EyeClosedIcon';
import EyeOpenIcon from './EyeOpenIcon';
import { Link } from 'react-router-dom';

const ChangePassword = () => {
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword:'',
    newPasswordConfirm:''
  });
  const [passwordAlert, setPasswordAlert] = useState(false)
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showNewPasswordConfirm, setShowNewPasswordConfirm] = useState(false)

  const { oldPassword, newPassword, newPasswordConfirm } = passwordData;

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { userInfo, errMessage, success } = useSelector(state => state.user);

  const formSubmittedRef = useRef(false);

  useEffect(() => {
    if (!userInfo) {
      navigate('/')
    }
    setPasswordAlert(success ?
      'You have successfully updated your password!' :
      errMessage)
    
      return () => {
        if (!formSubmittedRef.current) {
          dispatch(reset());
        }
      };

  }, [userInfo, navigate, success, errMessage, dispatch]);
  
  const onChangeHandler = (e) => {
    setPasswordData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (newPassword !== newPasswordConfirm) {
      return setPasswordAlert('Passwords do not match!')
    }
    dispatch(updatePassword({ _id: userInfo._id, oldPassword, newPassword }))
    formSubmittedRef.current = true;
  };

  return (
    <div className='container form-wrapper'>
      <Link to={`/user/account/${userInfo._id}`}><button className='btn btn-navigate btn-navigate-profile'>Go Back</button></Link>
      {passwordAlert  && <Alert message={passwordAlert} type={success ? 'success' :'error'} />}
      <h1>Enter New Password</h1>
      <form onSubmit={submitHandler} className='login-register-form'>
        <div className="form-group">
          <label htmlFor="oldPassword">Enter Old Password</label>
          <input type={showOldPassword ? "text" : "password"} name="oldPassword" id="oldPassword" value={oldPassword} onChange={onChangeHandler} required />
          {showOldPassword ? <div onClick={() => setShowOldPassword(false)}><EyeOpenIcon/></div> : <div onClick={()=>setShowOldPassword(true)}><EyeClosedIcon/></div> }
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input type={showNewPassword ? "text" : "password"}  name="newPassword" id="newPassword" value={newPassword} onChange={onChangeHandler} required />
          {showNewPassword ? <div onClick={() => setShowNewPassword(false)}><EyeOpenIcon/></div> : <div onClick={()=>setShowNewPassword(true)}><EyeClosedIcon/></div> }
        </div>
        <div className="form-group">
          <label htmlFor="newPasswordConfirm">Confirm New Password</label>
          <input type={showNewPasswordConfirm ? "text" : "password"}  name="newPasswordConfirm" id="newPasswordConfirm" value={newPasswordConfirm} onChange={onChangeHandler} required />
          {showNewPasswordConfirm ? <div onClick={() => setShowNewPasswordConfirm(false)}><EyeOpenIcon/></div> : <div onClick={()=>setShowNewPasswordConfirm(true)}><EyeClosedIcon/></div> }
        </div>
        <button className="btn btn-submit">Submit</button>
      </form>
    </div>
  )
}

export default ChangePassword