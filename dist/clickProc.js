const mySearch = () => {
  if (document.getElementById('the_city').checkValidity()) {
    const myCity = document.getElementById('the_city').value;
    const data = `http://api.openweathermap.org/data/2.5/weather?q=${myCity}&APPID=a927138a440e0fd4963775d02c45edfb`;
    const myCitySerialized = JSON.stringify(data);
    localStorage.setItem('myCityW', myCitySerialized);
  }
};

const changeUnit = () => {
  const unit = document.getElementById('unit');
  const temperature = document.getElementById('temp');
  const t1 = document.getElementById('tempo1');
  const t2 = document.getElementById('tempo2');

  if (unit.innerHTML === '°C') {
	const t = parseInt(temperature.innerHTML,10);
	temperature.innerHTML = t2.innerHTML
	unit.innerHTML = 'F';
  } else {
    const t = parseInt(temperature.innerHTML,10);
	temperature.innerHTML = t1.innerHTML
	unit.innerHTML = '°C';
  }
};
// T(°C) = (T(°F) -32) * 5/9
// T(°F) = T(°C) × 9/5 + 32
