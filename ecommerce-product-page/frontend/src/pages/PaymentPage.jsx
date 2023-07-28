import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setPathName } from '../slices/userSlice';
import IconPayPal from '../components/IconPayPal';
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';
import IconQuestionMark from '../components/IconQuestionMark';
import IconEdit from '../components/IconEdit';
import IconLock from '../components/IconLock';

const PaymentPage = () => {
  const { userInfo, provinces, isLoading } = useSelector(state => state.user)
  const [billingData, setBillingData] = useState({
    name: '',
    lastName: '',
    streetNo: '',
    streetName: '',
    postalCode: '',
    province: userInfo?.address?.province ?? '',
    country: 'Canada'
  });
  const [selectedMethod, setSelectedMethod] = useState('credit-card')
  const [billingAddress, setBillingAddress] = useState('same')
  const [securityCodeTip, setSecurityCodeTip] = useState(false)
  const [encryptionTip, setEncryptionTip] = useState(false)

  const { name, lastName, streetNo, streetName, postalCode, province, country } = billingData

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();


  const { email, address: { streetNo: streetNoUser, streetName: streetNameUser, postalCode: postalCodeUser, province: provinceUser, country: countryUser } = {} } = userInfo || {}

  const message = 'Your billing address must match your payment card`s registered address.'

  useEffect(() => {
    if (!userInfo && !isLoading) {
      navigate('/login')
    }

    console.log(location.pathname)
  }, [userInfo, navigate, isLoading, location.pathname])

  const handleHover = {
    handleMouseEnterSecurityCode: () => {
      setSecurityCodeTip(true)
    },
    handleMouseLeaveSecurityCode: () => {
      setSecurityCodeTip(false)
    },
    handleEncryptionEnter: () => {
      setEncryptionTip(true)
    },
    handleEncryptionLeave: () => {
      setEncryptionTip(false)
    }
  };

  const onChangeHandler = (e) => {
  
    const { name, value } = e.target
    setBillingData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(billingData)
  }

 
  return (
    <div className='container payment-page-wrapper'>
      
      <div className="shipping-summary-wrapper">
      <div className="summary-row">
        <h4 className="header">Contact</h4>
        <p className="contact-info">{email}</p>
      </div>
        <div className="summary-row">
          <h4>Shipping address</h4>
          <p>{streetNoUser}-{streetNameUser}, {postalCodeUser}, {provinceUser}, {countryUser}</p>
          <Link className='summary-edit-btn' to='/user/account/editaddress/' onClick={()=>dispatch(setPathName(location.pathname))}><IconEdit /></Link>
        </div>
        </div>
  
    

      <form className="payment-form-wrapper" onSubmit={submitHandler}>
      <div className='form-section-title'>
        <h3>Payment</h3>
        <p>All transactions are secure and encrypted</p>
      </div>
        <div className="payment-method-wrapper">
          <div className="payment-method-form-group">
            <input type="radio" name="credit-card" id="credit-card" value='credit-card'
              checked={selectedMethod === 'credit-card'}
              onChange={() => setSelectedMethod('credit-card')}
            />
            <label htmlFor="credit-card">Credit Card</label>
          </div>
 
          <section className={`credit-card-form-wrapper ${selectedMethod === 'credit-card' && 'visible'}`}>
            <div className="card-number-wrapper">
              <input type="text" placeholder='Card Number' />
              <div className="lock-icon-wrapper" onMouseEnter={handleHover.handleEncryptionEnter} onMouseLeave={handleHover.handleEncryptionLeave}><IconLock /></div>
              {encryptionTip && <small className='encryption-tip-wrapper'>All transactions are secure and encrypted.</small> }
            </div> 
            <input type="text" placeholder='Name on card' />
            <div className="expiration-security-wrapper">
              <input type="text" name="" id="" placeholder='Expiration date (MM / YY)' />
              <div className="security-code-wrapper">
                <input type="text" placeholder='Security code' />
                <div className="tip-icon-holder" onMouseEnter={handleHover.handleMouseEnterSecurityCode} onMouseLeave={handleHover.handleMouseLeaveSecurityCode} ><IconQuestionMark /></div>
                {securityCodeTip && <small className='security-code-tip-wrapper'>3-digit security code usually found on the back of your card. American Express cards have a 4-digit code located on the front.</small>}
              </div>
            </div>
          </section>

          <div className="payment-method-form-group">
            <input type="radio" name="pay-pal" id="pay-pal" value='pay-pal' checked={selectedMethod === 'pay-pal'} onChange={() => setSelectedMethod('pay-pal')} />
            <label htmlFor="pay-pal"><IconPayPal /></label>
          </div>
        </div>

        <div className='form-section-title'>
          <h3>Billing address</h3>
          <p>Select the address that matches your card or payment method</p>
          <Alert message={message} type='warning' />
        </div>
        <div className="billing-address-form-group-wrapper">
           <div className="billing-address-form-group">
          <input type="radio" name="same-as-shipping" id="same-as-shipping"
            checked={billingAddress === 'same'}
            onChange={() => setBillingAddress('same')}
          />
          <label htmlFor="same-as-shipping">Same as shipping address</label>
        </div>
        <div className="billing-address-form-group">
          <input type="radio" name="different-billing-address" id="different-billing-address"
            checked={billingAddress === 'different'}
            onChange={() => setBillingAddress('different')}
          />
          <label htmlFor="different-billing-address">Use a different billing address</label>
        </div>
        </div>
       

        <section className={`billing-address-form-wrapper ${billingAddress === 'different' && 'visible'}`}>
          <div className="form-group-billing first-last-name">
          <input type="text" name="name" id="name" placeholder='Name' value={name} onChange={onChangeHandler} required />
            <input type="text" name="lastName" id="lastName" placeholder='Last Name' value={lastName} onChange={onChangeHandler} required />
          </div>
          <div className="form-group-billing">
            <input type="text" name="streetNo" id="streetNo" placeholder='Street No' value={streetNo} onChange={onChangeHandler} required />
          </div>
          <div className="form-group-billing">
            <input type="text" name="streetName" id="streetName" placeholder='Street Name' value={streetName} onChange={onChangeHandler} required />
          </div>
          <div className="form-group-billing">
            <input type="text" name="postalCode" id="postalCode" placeholder='Postal Code' value={postalCode} onChange={onChangeHandler} required />
          </div>
          <div className="form-group-billing">
            <label htmlFor="province">Province</label>
            <select name="province" id="province" value={province} onChange={onChangeHandler} required>
              {provinces.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input type="text" name="country" id="country" value={country} readOnly />
          </div>

        </section>


        <footer>
          <Link to='/user/shipping'>Return to delivery</Link>
          <button className='btn btn-submit'>Pay now</button>
        </footer>
       
      </form>
    </div>
  )
};

export default PaymentPage