import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { GeolocationService } from '@ng-web-apis/geolocation';

import { WeatherDetail } from '../../../shared/models/weather-detail.model';
import { WeatherService } from '../../../shared/services/weather.service';
import { LocationService } from '../../../shared/services/location.service';
import { TemperatureService, TemperatureUnit } from '../../../shared/services/temperature.service';

@Component({
  selector: 'app-aside-detail',
  templateUrl: './aside-detail.component.html',
  styleUrls: ['./aside-detail.component.scss']
})
export class AsideDetailComponent implements OnInit {
  @Output() closeEvent = new EventEmitter();
  tempUnit = TemperatureUnit.CELSIUS;
  weather: WeatherDetail = {};
  isInitialState = true;
  isLoading = false;
  error: GeolocationPositionError | null = null;

  constructor(
    private locationService: LocationService,
    private temperatureService: TemperatureService,
    private weatherService: WeatherService,
    private geolocation$: GeolocationService
  ) { }

  ngOnInit(): void {
    this.temperatureService.getTemperatureUnit().subscribe((unit) => {
      this.changeTempUnit(unit);
    });
    this.getWeatherData();
  }

  onSearch(): void {
    this.openSideLocationPanel();
  }

  openSideLocationPanel(): void {
    this.closeEvent.emit();
  }

  changeTempUnit(unit: TemperatureUnit): void {
    this.tempUnit = unit;
  }

  getWeatherData(): void {
    this.weatherService.getWeatherData().subscribe((data: any) => {
      this.isInitialState = false;
      this.error = null;
      if (data === null) {
        this.isLoading = true;
      } else {
        this.isLoading = false;
        this.weather = data.consolidated_weather[0];
        this.weather.location = data.title;
      }
    },
    (error: any) => {
      this.error = error;
    });
  }

  onGetGPSLocation(): void {
    this.error = null;
    this.geolocation$.pipe(take(1)).subscribe((position: any) => {
      this.locationService.searchNearbyPositions(position.coords.latitude, position.coords.longitude);
      this.openSideLocationPanel();
    },
    (error: GeolocationPositionError) => {
      this.error = error;
    });
  }
}
