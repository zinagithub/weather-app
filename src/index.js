import './style.css';
import Weather from './data';
import { gotData } from './api_data';
import { api, myKey } from './weather_data';


function displayData(inf) {
  const obj = new Weather(inf.name, inf.weather[0].main, inf.weather[0].description,
    inf.weather[0].icon, inf.main.temp);
  obj.displayDomWeather();
  localStorage.clear();
}

function showByCity() {
  const url = getMyCityW();
  if (url) {
    fetch(url, { mode: 'cors' })
	    .then((response) => response.json())
	    .then((response) => {
	    	displayData(response);
	    });
  } else {
    showByLocation();
  }
}

function showByLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `${api}lat=${lat}&lon=${long}${myKey}`;
    gotData(url).then((response) => {
      displayData(response);
    }).catch((e) => {
      console.log(e);
    });
  });
}


const getMyCityW = () => {
  let myCityDeserialized;
  if (localStorage.getItem('myCityW')) {
    myCityDeserialized = JSON.parse(localStorage.getItem('myCityW'));
  }
  return myCityDeserialized;
};

showByCity();
