import './style.css';
import Weather from './data';
import gotData from './api_data';
import { api, myKey } from './weather_data';

const butSearch = document.getElementById('the_search');

function handleError(e) {
  const alertBox = document.querySelector('.alert');
  alertBox.style.display = 'block';
  if (e.message === '404') {
    document.querySelector('.alert p').innerHTML = 'City not found';
  } else {
    document.querySelector('.alert p').innerHTML = 'Something went wrong';
  }
  document.querySelector('.alert button').addEventListener('click', () => {
    alertBox.style.display = 'none';
  });
}

function displayData(inf) {
  const obj = new Weather(inf.name, inf.weather[0].main, inf.weather[0].description,
    inf.weather[0].icon, inf.main.temp);
  obj.displayWeather();
}

function urlData(url) {
  gotData(url).then((response) => {
    displayData(response);
  }).catch((e) => {
    handleError(e);
  });
}
const citySearch = () => {
  if (document.getElementById('the_city').checkValidity()) {
    const myCity = document.getElementById('the_city').value;
    const url = `${api}q=${myCity}${myKey}`;
    urlData(url);
  }
};

function showByLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `${api}lat=${lat}&lon=${long}${myKey}`;
    urlData(url);
  });
}


function showByCity() {
  showByLocation();
  butSearch.addEventListener('click', citySearch);
}

showByCity();
