import { useState } from 'react';
import IconPayPal from '../components/IconPayPal';
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';
import IconQuestionMark from '../components/IconQuestionMark';

const PaymentPage = () => {
  const [activeMethod, setActiveMethod] = useState(0)
  const [tip, setTip] = useState(true)

  const message = 'Your billing address must match your payment card`s registered address.'

  /*
  const handleMouseEnter = () => {
    setTip(true)
  }

  const handleMouseLeave = () => {
    setTip(false)
  }*/

  return (
    <div className='container payment-page-wrapper'>
      <header>
        <h3>Payment</h3>
        <p>All transactions are secure and encrypted</p>
      </header>

      <form className="payment-form-wrapper">

        <div className="payment-method-wrapper">
          <div className="payment-method-form-group">
            <input type="radio" name="credit-card" id="credit-card" />
            <label htmlFor="credit-card">Credit Card</label>
          </div>
          <div className="credit-card-form-wrapper">
            <input type="text" placeholder='Card Number' />
            <input type="text" placeholder='Name on card' />
            <div className="expiration-security-wrapper">
              <input type="text" name="" id="" placeholder='Expiration date (MM / YY)' />
              <div className="security-code-wrapper">
                <input type="text" placeholder='Security code' />
                <div className="tip-icon-holder"><IconQuestionMark /></div>
                {tip && <div className='tip-wrapper'>3-digit security code usually found on the back of your card. American Express cards have a 4-digit code located on the front.</div>}
              </div>
             
            </div>
          </div>
          <div className="payment-method-form-group">
            <input type="radio" name="pay-pal" id="pay-pal" />
            <label htmlFor="pay-pal"><IconPayPal /></label>
          </div>
        </div>  

        <div className="billing-address-wrapper">
          <h3>Billing address</h3>
          <p>Select the address that matches your card or payment method</p>
          <Alert message={message} type='warning' />
        </div>
        <div className="form-group">
          <input type="radio" name="same-as-shipping" id="same-as-shipping" />
          <label htmlFor="same-as-shipping">Same as shipping address</label>
        </div>
        <div className="form-group">
          <input type="radio" name="different-billing-address" id="different-billing-address" />
          <label htmlFor="different-billing-address">Use a different billing address</label>
        </div>
        <footer>
          <Link to='/user/shipping'>Return to delivery</Link>
           <button className='btn btn-submit'>Pay now</button>
        </footer>
       
      </form>
    </div>
  )
};

export default PaymentPage