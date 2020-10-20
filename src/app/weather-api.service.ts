import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WeatherApiService {
  private baseWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";
  private urlSuffix = "&units=metric&APPID=abe1eb51289c21c167c66ce790c2fac3";
  constructor(private http: HttpClient) {}

  getWeather(location) {
    let url = this.baseWeatherURL + location + this.urlSuffix;
    return this.http.get(url);
  }
}
