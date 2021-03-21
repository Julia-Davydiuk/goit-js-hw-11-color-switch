import colors from './colors.js';

const bodyRef = document.querySelector('body');
const btnStartRef = document.querySelector('[data-action="start"]');
const btnStopRef = document.querySelector('[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let intervalColor;

function changeColor() {
    intervalColor = setInterval(() => {
        bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
    }, 1000);

    btnStartRef.removeEventListener('click', changeColor);
    btnStartRef.disabled = true;
}

    btnStopRef.addEventListener('click', function stopColor () {
      clearInterval(intervalColor);
      btnStartRef.addEventListener('click', changeColor);
      btnStartRef.disabled = false;
    });

btnStartRef.addEventListener('click', changeColor)