import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=eb5d0e834978c8bc8943f213a9c178e8`
    );
}
}
