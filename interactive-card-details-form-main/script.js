const submitForm = document.querySelector('#submit-form');
const submitBtn = document.querySelector('.btn');
const nameInput = document.getElementById('name');
const numberInput = document.getElementById('number');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const cvcIntput = document.getElementById('cvc');


monthInput.addEventListener("input", function(e) {
  // Remove any non-numeric characters from the input
  e.target.value = e.target.value.replace(/[^0-9]/g, "");

  // Limit the input to a maximum of 2 digits
  if (e.target.value.length > 2) {
    e.target.value = e.target.value.slice(0, 2);
  }



})

submitForm.addEventListener('submit', (e) => {
  e.preventDefault();


  const nameRegex = /^[a-zA-Z]{1,10} [a-zA-Z]{1,10}$/
  const ccNumberRegex = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/
  const monthRegex = /^(0[1-9])|(1[0-2])$/
  const yearRegex = /^(2[3-9])|([3-9][0-9])$/
  const name = nameInput.value
  const month = monthInput.value
  const year = yearInput.value 


 

  //Need to get current month dyanmically! Date.now()??

})

