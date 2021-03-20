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