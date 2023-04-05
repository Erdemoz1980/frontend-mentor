const submitForm = document.querySelector('#submit-form');
const submitBtn = document.querySelector('.btn');
const nameInput = document.getElementById('name');
const numberInput = document.getElementById('number');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const cvcInput = document.getElementById('cvc');

const nameRegex = /^[a-zA-Z]{1,15} [a-zA-Z]{1,15}$/;
const cardRgex = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;
const monthRegex = /^(0[1-9])|(1[0-2]$)/;
const yearRegex = /^(2[3-9])|[3-9][0-9]$/; 
const cvcRegex = /^[0-9]{3}$/

//Make name input accept only letters
nameInput.addEventListener('input', (e) => {
   e.target.value = e.target.value.replace(/[^a-z ]/ig,'')
})

//Make card number input accept only digits
numberInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^0-9 ]/gi,'')
})

//Make month input accept only digits 
monthInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '')

  //Limit input to max of 2 digits
  e.target.value = e.target.value.slice(0, 2)
})

//Make year input accept only digits
yearInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '')

   //Limit input to max of 2 digits
  e.target.value = e.target.value.slice(0, 2);
  
})

//Make CVC input accept only digits
cvcInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g,'')

  //Limit input to max of 3 digits
  e.target.value = e.target.value.slice(0, 3);
})


//On submit check for regex validation
//On validation forward the user to complete state
submitForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //Validate name
  if (!nameRegex.test(nameInput.value)) {
    alert('Please enter a valid name!')
    return nameInput.focus()  
  }

  //Validate Credit Card number
  if (!cardRgex.test(numberInput.value)) {
    alert('Please enter a valid number');
    return numberInput.focus();
  }

  //Validate Month
  if (!monthRegex.test(monthInput.value)) {
    alert('Please enter a valid month')
    return monthInput.focus()
  }

  //Validate CVC
  if (!cvcRegex.test(cvcInput.value)) {
    alert('Please enter a valid CVC number')
    return cvcInput.focus();
  }

  return window.location = "/http://127.0.0.1:5500/interactive-card-details-form-main/complete.html"

});



