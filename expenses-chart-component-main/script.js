const chartContainer = document.querySelector('.chart-container');

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const barContainer = document.createElement('div');
      barContainer.classList.add('bar-container');
      const maxAmount = Math.max(...data.map(item => item.amount));
      const bar = document.createElement('div');
      const label = document.createElement('small');
      label.innerText = item.day;
      label.style.textAlign = 'center';
      bar.classList.add('bar');
      bar.style.height = `${(item.amount / maxAmount) * 100}%`;
      if (item.amount === maxAmount) {
        bar.classList.add('max')
      }
      barContainer.appendChild(label);
      barContainer.appendChild(bar);
      chartContainer.appendChild(barContainer);
 
    })
  
  })
.catch(err=>console.error(err))