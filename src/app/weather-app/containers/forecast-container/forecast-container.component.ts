import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../shared/services/weather.service';

@Component({
  selector: 'app-forecast-container',
  templateUrl: './forecast-container.component.html',
  styleUrls: ['./forecast-container.component.scss']
})
export class ForecastContainerComponent implements OnInit {
  forecastDataArr: any = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getForecastWeatherData();
  }

  getForecastWeatherData(): void {
    this.weatherService.getWeatherData().subscribe((data: any) => {
      if (data) {
        // data.consolidated_weather[0].applicable_date = 'Tomorrow';
        this.forecastDataArr = data.consolidated_weather.slice(1, data.consolidated_weather?.length);
      } else {
        this.forecastDataArr = [null, null, null, null, null];
      }
    });
  }
}
