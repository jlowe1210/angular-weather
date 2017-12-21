import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import Coords from '../shared/coords.interface';
import WeatherData from '../shared/weatherData.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})



export class AppComponent {
  location: Coords = {
    lat: 0,
    lng: 0
  };

  weather: WeatherData;
  fiveDayWeatherforcast: any[];
  constructor(private http: HttpClient) {}

  setCoords(coords) {
    this.location = coords;
    this.http.get<any>
      (`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=e157b6998b793d0e3f48f35a14533939`)
        .subscribe(res => {
          this.weather = {
            name: res.name,
            fahrenheit: +(((res.main.temp - 273.15) * 9 / 5) + 32).toFixed(2),
            celsius: +(res.main.temp - 273.15).toFixed(2),
        };
      });
    this.http.get<any>
      (`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lng}&appid=e157b6998b793d0e3f48f35a14533939`)
        .subscribe(res => {
          this.fiveDayWeatherforcast = res.list;
          console.log(this.fiveDayWeatherforcast);
        });

  }

  onLocationBySearch(location) {
    this.http.get<any>
      (`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=e157b6998b793d0e3f48f35a14533939`)
        .subscribe(res => {
          this.weather = {
            name: res.name,
            fahrenheit: +(((res.main.temp - 273.15) * 9 / 5) + 32).toFixed(2),
            celsius: +(res.main.temp - 273.15).toFixed(2),
          };
          this.location = {
            lat: res.coord.lat,
            lng: res.coord.lon
          };
        });
    this.http.get<any>
      (`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=e157b6998b793d0e3f48f35a14533939`)
        .subscribe(res => {
          this.fiveDayWeatherforcast = res.list;
          });
  }

}
