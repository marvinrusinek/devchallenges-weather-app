import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../shared/services/weather.service';

@Component({
  selector: 'app-stats-container',
  templateUrl: './stats-container.component.html',
  styleUrls: ['./stats-container.component.scss']
})
export class StatsContainerComponent implements OnInit {
  weather: any = {};
  isInitialState = true;
  isLoading = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe((data: any) => {
      this.isInitialState = false;
      if (data) {
        this.isLoading = false;
        this.weather = data.consolidated_weather[0];
      } else {
        this.isLoading = true;
      }
    });
  }
}
