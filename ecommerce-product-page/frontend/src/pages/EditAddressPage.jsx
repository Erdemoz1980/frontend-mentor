import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';

const EditAddressPage = () => {
  const { userInfo } = useSelector(state => state.user);

  const [address, setAddress] = useState({
    streetNo:userInfo?.address?.streetNo,
    streetName:userInfo?.address?.streetName,
    postalCode:userInfo?.address?.postalCode,
    province:userInfo?.address?.province,
    country:userInfo?.address?.country
  })
  const [alert, setAlert] = useState(false);

  const { streetNo, streetName, postalCode, province, country } = address;

  const provinces = ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'ON', 'PE', 'QC', 'SK'];

 
  const navigate = useNavigate()

  useEffect(() => {
    if (!userInfo) {
      navigate('/')
    }
  },[navigate, userInfo])

  const onChangeHandler = (e) => {
    setAddress(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }
  
  return (
    <div className='container form-wrapper'>
      {(alert || userInfo?.errMessage) && <Alert message={alert ? alert : userInfo?.errMessage} />}
      <h1>Edit Address</h1>
      <form onSubmit={submitHandler} className='login-register-form'>
        <div className="form-group">
          <label htmlFor="streetNo">Street No</label>
          <input type="text" name="streetNo" id="streetNo" value={streetNo} onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="streetName">Unit no & Street Name</label>
          <input type="text" name="streetName" id="streetName" value={streetName} onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code</label>
          <input type="text" name="postalCode" id="postalCode" value={postalCode} onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="province">Province</label>
          <select name="province" id="province" value={province} onChange={onChangeHandler}>
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

export default EditAddressPage