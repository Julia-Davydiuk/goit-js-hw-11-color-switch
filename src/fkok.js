btnStartRef.addEventListener('click', randomColor);


function randomColor () {
  const intervalColor = setInterval(() => {
      bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 500);
    
  function startColor () {
      btnStartRef.removeEventListener('click', startColor);
  };   
  
  btnStopRef.addEventListener('click', stopColor);  

  function stopColor () {
    clearInterval(intervalColor);
    btnStartRef.disabled = false;
    btnStartRef.addEventListener('click', startColor);
    btnStopRef.removeEventListener('click', stopColor);
  };
}
