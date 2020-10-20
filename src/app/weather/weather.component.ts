import { Component, OnInit } from "@angular/core";
import { WeatherApiService } from "../weather-api.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"]
})
export class WeatherComponent implements OnInit {
  weathers: any = [];

  constructor(private service: WeatherApiService) {}

  ngOnInit(): void {
    // for(let i = 0; i<= 8; i++){
    //   this.weathers.push(this.weather)
    // }
    this.initialize();
  }

  getWeather(i) {
    console.log(
      "the valueis ",
      (document.getElementById("location-" + i) as HTMLInputElement).value
    );
    let city = (document.getElementById("location-" + i) as HTMLInputElement)
      .value;
    this.service.getWeather(city).subscribe(
      res => {
        console.log("res:::", res);
        this.weathers[i] = {
          location: city,
          data: res,
          editFlag: true,
          msg: null
        };
      },
      error => {
        this.weathers[i].msg = error.error.message;
        this.weathers[i].editFlag = false;
      }
    );
  }
  changeCity(i) {
    this.weathers[i].editFlag = false;
    this.weathers[i].msg = null;
  }
  initialize() {
    this.weathers = [
      {
        location: "",
        editFlag: false,
        msg: "",
        data: {}
      },
      {
        location: "",
        editFlag: false,
        msg: "",
        data: {}
      },
      {
        location: "",
        editFlag: false,
        msg: "",
        data: {}
      },
      {
        location: "",
        editFlag: false,
        msg: "",
        data: {}
      },
      {
        location: "",
        editFlag: false,
        msg: "",
        data: {}
      },
      {
        location: "",
        editFlag: false,
        msg: "",
        data: {}
      },
      {
        location: "",
        editFlag: false,
        msg: "",
        data: {}
      },
      {
        location: "",
        editFlag: false,
        msg: "",
        data: {}
      },
      {
        location: "",
        editFlag: false,
        msg: "",
        data: {}
      }
    ];
  }
}
