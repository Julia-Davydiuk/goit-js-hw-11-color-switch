import colors from './colors.js';

const bodyRef = document.querySelector('body');
const btnStartRef = document.querySelector('[data-action="start"]');
const btnStopRef = document.querySelector('[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

btnStartRef.addEventListener('click', function randomColor () {
  btnStartRef.removeEventListener('click', randomColor);
  btnStartRef.disabled = true;

  const intervalColor = setInterval(() => {
      bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 500);
      
  btnStopRef.addEventListener('click', function stopColor () {
    clearInterval(intervalColor);
    btnStartRef.disabled = false;
    btnStartRef.addEventListener('click', randomColor);
    btnStopRef.removeEventListener('click', stopColor);
  });
});