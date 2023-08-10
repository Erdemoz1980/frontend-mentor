import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setPathName } from '../slices/userSlice';
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';
import IconPayPal from '../components/IconPayPal';
import IconQuestionMark from '../components/IconQuestionMark';
import IconEdit from '../components/IconEdit';
import IconLock from '../components/IconLock';
import IconVisa from '../components/IconVisa';
import IconMasterCard from '../components/IconMasterCard';
import { PayPalButtons } from '@paypal/react-paypal-js'

const PaymentPage = () => {
  const { userInfo, provinces, isLoading} = useSelector(state => state.user)
  const { cartItems } = useSelector(state => state.cart)
  const subTotal = cartItems.reduce((acc, item) => acc + (item.qty) * (item.price), 0)
  const shippingAmount = subTotal > 100 ? 0 : 20 
  const totalTax = (13 / 100) * subTotal
  const total = subTotal + shippingAmount + totalTax

  const [billingData, setBillingData] = useState({
    name: '',
    lastName: '',
    streetNo: '',
    streetName: '',
    postalCode: '',
    province: userInfo?.address?.province ?? '',
    country: 'Canada'
  });
  const [creditCardData, setCreditCardData] = useState({
    cardNumber: '',
    nameOnCard:'',
    cardExpiry: '',
    securityCode:''
  })
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit-card')
  const [billingAddress, setBillingAddress] = useState('same')
  const [securityCodeTip, setSecurityCodeTip] = useState(false)
  const [encryptionTip, setEncryptionTip] = useState(false)
  const [cardAlert, setCardAlert] = useState({
    cardNumberAlert: false,
    expiryAlert: false
  })

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
    if (cartItems.length < 1) {
      navigate('/')
    }
    if (selectedPaymentMethod === 'pay-pal') {
      setCreditCardData({
        cardNumber: '',
        nameOnCard: '',
        cardExpiry: '',
        securityCode: ''
      });
    }
  }, [userInfo, navigate, isLoading, location.pathname, cartItems.length, selectedPaymentMethod])

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

  const handleCardNumberChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '')
    
    const formattedValue = value.replace(/(\d{4})(?=\d{4})/g, '$1 ');
    setCreditCardData(prevState => ({
      ...prevState,
      cardNumber: formattedValue
    }))

    if (Number(value[0]) !== 4) {
      setCardAlert(prevState => ({
        ...prevState,
        cardNumberAlert: true
      }))
    } else {
      setCardAlert(prevState => ({
        ...prevState,
        cardNumberAlert: false
      }))
    }
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value
    value = value.replace(/\D/g, '')
    if (value.length > 2) {
      value = value.slice(0, 2) + ' / ' + value.slice(2)
    }

    setCreditCardData(prevState => ({
      ...prevState,
      cardExpiry: value
    }))

    let [inputMonth, inputYear] = value.split(' / ')
    const currentMonth = new Date().getMonth() + 1
    const currentYear = Number(new Date().getFullYear().toString().slice(2))
  
    if (inputMonth?.length === 2 && inputYear?.length === 2) {
      inputMonth = Number(inputMonth)
      inputYear = Number(inputYear)
      if (inputYear > currentYear ||
        (inputYear === currentYear && parseInt(inputMonth, 10) >= currentMonth)) {
        setCardAlert(prevState => ({
          ...prevState,
          expiryAlert: false
        }))
      } else {
        setCardAlert(prevState => ({
          ...prevState,
          expiryAlert: true
        }))
      }
    }
  };

  
  const handleCardNameChange = (e) => {
    setCreditCardData(prevState => ({
      ...prevState,
      nameOnCard:e.target.value
    }))
  };

  const handleSecurityCodeChange = (e) => {
    setCreditCardData(prevState => ({
      ...prevState,
      securityCode: e.target.value
    }))
  }

  const onChangeHandler = (e) => {
    
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(creditCardData)
  }

 
  return (
    <div className='container payment-page-wrapper'>
      <Link to='/user/checkout'><button className="btn btn-navigate">Go Back</button></Link> 
    
      <div className="shipping-billing-wrapper">
        
  
      <form className="payment-form-wrapper" onSubmit={submitHandler}>
     
      <div className="shipping-summary-wrapper">
        <div className="summary-row">
          <h4 className="header">Contact:</h4>
          <p className="contact-info">{email}</p>
        </div>
        <div className="summary-row">
          <h4>Shipping address:</h4>
          <p>{streetNoUser}-{streetNameUser}, {postalCodeUser}, {provinceUser}, {countryUser}</p>
          <Link className='summary-edit-btn' to='/user/account/editaddress/' onClick={() => dispatch(setPathName(location.pathname))}><IconEdit /></Link>
        </div>
      </div>
        <div className='form-section-title'>
          <h3>Payment</h3>
          <p>All transactions are secure and encrypted</p>
        </div>
        <div className="payment-method-wrapper">
            <div className="payment-method-form-group">
              <div className="input-label-wrapper">
                  <input type="radio" name="credit-card" id="credit-card" value='credit-card'
              checked={selectedPaymentMethod === 'credit-card'}
              onChange={() => setSelectedPaymentMethod('credit-card')}
            />
              <label htmlFor="credit-card">Credit Card</label>
              </div>
              <div className="card-icons-wrapper">
              {['51', '52', '53', '54', '55'].includes(creditCardData.cardNumber.substring(0,2)) &&<IconMasterCard />}
              { creditCardData.cardNumber.startsWith('4') && <IconVisa />}
              </div>
             
          </div>
 
          <section className={`credit-card-form-wrapper ${selectedPaymentMethod === 'credit-card' && 'visible'}`}>
              <div className="card-number-wrapper">
                 {cardAlert.cardNumberAlert && <small className='card-alert'>Please enter a valid card number.</small>}
              <input type="text" placeholder='Card Number' name="cardNumber" value={creditCardData.cardNumber} onChange={handleCardNumberChange} required={selectedPaymentMethod==='credit-card'} maxLength={19} />
              <div className="lock-icon-wrapper" onMouseEnter={handleHover.handleEncryptionEnter} onMouseLeave={handleHover.handleEncryptionLeave}><IconLock /></div>
              {encryptionTip && <small className='encryption-tip-wrapper'>All transactions are secure and encrypted.</small>}
            </div>
            <input type="text" placeholder='Name on card' name="nameOnCard" value={creditCardData.nameOnCard} onChange={handleCardNameChange} required={selectedPaymentMethod==='credit-card'}/>
              <div className="expiration-security-wrapper">
                {cardAlert.expiryAlert && <small className='card-alert'>Please enter a valid expiry date</small>}
              <input type="text" name="cardExpiry" id="" placeholder='Expiration date (MM / YY)' value={creditCardData.cardExpiry} onChange={handleExpiryChange} required={selectedPaymentMethod==='credit-card'} maxLength={7}/>
              <div className="security-code-wrapper">
                <input type="text" placeholder='Security code' name="securityCode" value={creditCardData.securityCode} onChange={handleSecurityCodeChange} required={selectedPaymentMethod==='credit-card'} maxLength={3}/>
                <div className="tip-icon-holder" onMouseEnter={handleHover.handleMouseEnterSecurityCode} onMouseLeave={handleHover.handleMouseLeaveSecurityCode} ><IconQuestionMark /></div>
                {securityCodeTip && <small className='security-code-tip-wrapper'>3-digit security code usually found on the back of your card.</small>}
              </div>
            </div>
          </section>
            <div className="payment-method-form-group">
              <div className="input-label-wrapper">
                <input type="radio" name="pay-pal" id="pay-pal" value='pay-pal' checked={selectedPaymentMethod === 'pay-pal'} onChange={() => setSelectedPaymentMethod ('pay-pal')} />
              <label htmlFor="pay-pal"><IconPayPal /></label> 
            </div>
            </div>
              <div className={`paypal-button-wrapper ${selectedPaymentMethod === 'pay-pal' && 'visible'}`}>
                <PayPalButtons style={{ layout: "vertical" }} />
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
          <section className={`billing-address-form-wrapper ${billingAddress === 'different' && 'visible'}`}>
          <div className="form-group-billing first-last-name">
            <input type="text" name="name" id="name" placeholder='Name' value={name} onChange={onChangeHandler} required={billingAddress==='different'} />
            <input type="text" name="lastName" id="lastName" placeholder='Last Name' value={lastName} onChange={onChangeHandler} required={billingAddress==='different'} />
          </div>
          <div className="form-group-billing">
            <input type="text" name="streetNo" id="streetNo" placeholder='Street No' value={streetNo} onChange={onChangeHandler} required={billingAddress==='different'} />
          </div>
          <div className="form-group-billing">
                <input type="text" name="streetName" id="streetName" placeholder='Street Name' value={streetName} onChange={onChangeHandler} required={billingAddress === 'different'} />
          </div>
          <div className="form-group-billing">
         
          </div>
          <div className="form-group-billing">
            <div>
                  <input type="text" name="postalCode" id="postalCode" placeholder='Postal Code' value={postalCode} onChange={onChangeHandler} required={billingAddress === 'different'} />
            </div>
            <div className='billing-address-select-wrapper'>
                <select name="province" id="province" value={province} onChange={onChangeHandler} required={billingAddress === 'different'}>
                {provinces.map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))}
              </select>
            </div>
            <div>
              <input type="text" name="country" id="country" value={country} readOnly />
            </div>
          </div>
        </section>
        </div>
       
        <footer>
          <button className='btn btn-submit'>Place Order</button>
        </footer>
       
        </form>
       
      <section className='order-summary-wrapper'>
        <div className="order-items-wrapper">
        {
          cartItems.map(item => (
            <div key={item._id} className="order-item-wrapper">
              <div className="order-item-img-wrapper">
                <img src={item.img} alt='order item' />
                <small className='order-item-qty'>{item.qty}</small>
              </div>
              <div className="order-item-name">
                <p>{item.name}</p>
                <small>{item.colorVersion}</small>
              </div>
              <div className="order-item-total">${((item.price) * (item.qty)).toFixed(2)}
              </div>
            </div>
          ))
          }
          </div>
        <div className="order-summary-subs-wrapper">
          <div className="order-total-row">
            <h4>Subtotal</h4>
            <h4>${subTotal.toFixed(2)}</h4>
          </div>
          <div className="order-total-row">
            <h4>Shipping</h4>
            <h4>{shippingAmount>0 ? `$${shippingAmount.toFixed(2)}` : 'Free Shipping' }</h4>
          </div>
          <div className="order-total-row">
            <h4>Estimated Taxes</h4>
            <h4>${totalTax.toFixed(2)}</h4>
          </div>
        </div>
        <div className="order-summary-total-wrapper">
          <h4>Total</h4>
          <h3 className='total-bill'><span>CAD</span>${total.toFixed(2)}</h3>
        </div>
        </section>
        </div>
    </div>
  )
};

export default PaymentPage