export default class Weather {
  constructor(city, main, description, icon, temp) {
    this.city = city;
    this.main = main;
    this.description = description;
    this.icon = icon;
    this.temp = temp;
    this.dueDate = new Date();
  }

  displayDomWeather() {
    const info1 = document.getElementById('cityName');
    const img = document.querySelector('img');
    const temperature = document.getElementById('temp');
    const t1 = document.getElementById('tempo1');
    const t2 = document.getElementById('tempo2');
    const theDate = document.getElementById('theDate');
    const desc = document.getElementById('description');
    info1.innerHTML = `Weather in ${this.city}`;
    theDate.innerHTML = formatDate(this.dueDate);
    desc.innerHTML = this.description;
    img.src = `http://openweathermap.org/img/w/${this.icon}.png`;
    const kCel = Math.trunc(this.temp - 273);    //convert kelvin to celsus
    t1.innerHTML = kCel;
    t2.innerHTML = parseInt((kCel * 9) / 5 + 32, 10);
    temperature.innerHTML = kCel;
    const unit = document.getElementById('unit');
    unit.innerHTML = '°C';
  }
}
function formatDate(date) {
  const monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December',
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${monthNames[monthIndex]} ${year}`;
}
