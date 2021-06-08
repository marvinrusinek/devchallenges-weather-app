import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { LocationService } from '../../../shared/services/location.service';
import { WeatherService } from '../../../shared/services/weather.service';

@Component({
  selector: 'app-aside-location',
  templateUrl: './aside-location.component.html',
  styleUrls: ['./aside-location.component.scss']
})
export class AsideLocationComponent implements OnInit {
  @Output() closeEvent = new EventEmitter();
  query = '';
  locationOptions: any[] = [];
  error: any;
  isInitialState = true;
  isLoading = false;

  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.watchGPSPositions();
  }

  onClose(): void {
    this.closeEvent.emit();
  }

  watchGPSPositions(): void {
    this.locationService.gpsPositionOptions$.subscribe((data: any) => {
      this.locationOptions = data;
    }, (error: any) => {
      this.error = error;
    });
  }

  onSearch(): void {
    this.isLoading = true;
    this.error = null;
    this.locationOptions = [];

    this.locationService.searchLocation(this.query).subscribe((data: any) => {
      this.isLoading = false;
      this.locationOptions = data;
      if (this.locationOptions.length === 0) {
        this.error = { message: 'No location found for the given query' };
      }
    }, (error: any) => {
      this.isLoading = false;
      this.error = error;
    });
  }

  onSelect(option: any): void {
    this.weatherService.fetchWeatherData(option.woeid);
    this.onClose();
  }
}
