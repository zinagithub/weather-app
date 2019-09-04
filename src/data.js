import domWeather from './dom_weather';

export default class Weather {
  constructor(city, main, description, icon, temp) {
    this.city = city;
    this.main = main;
    this.description = description;
    this.icon = icon;
    this.temp = temp;
    this.dueDate = new Date();
  }

  displayWeather() {
    domWeather(this.city, this.dueDate, this.description, this.icon, this.temp);
  }
}
