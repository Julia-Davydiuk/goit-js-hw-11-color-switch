import colors from './colors.js';

const bodyRef = document.querySelector('body');
const btnStartRef = document.querySelector('[data-action="start"]');
const btnStopRef = document.querySelector('[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

btnStartRef.addEventListener('click', randomColor);

function randomColor () {
  const intervalColor = setInterval(() => {
      bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 500);
    
  function startColor () {
      btnStartRef.removeEventListener('click', startColor);
      btnStartRef.disabled = true;
  };   
  
  btnStopRef.addEventListener('click', stopColor);  

  function stopColor () {
    clearInterval(intervalColor);
    btnStartRef.disabled = false;
    btnStartRef.addEventListener('click', startColor);
    btnStopRef.removeEventListener('click', stopColor);
  };
}
