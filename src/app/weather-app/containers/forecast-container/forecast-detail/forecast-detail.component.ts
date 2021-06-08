import { Component, Input, OnInit } from '@angular/core';

import { TemperatureService, TemperatureUnit } from '../../../shared/services/temperature.service';

@Component({
  selector: 'app-forecast-detail',
  templateUrl: './forecast-detail.component.html',
  styleUrls: ['./forecast-detail.component.scss']
})
export class ForecastDetailComponent implements OnInit {
  @Input() weather: any;
  tempUnit = TemperatureUnit.CELSIUS;

  constructor(private temperatureService: TemperatureService) { }

  ngOnInit(): void {
    this.temperatureService.getTemperatureUnit().subscribe((unit) => {
      this.changeTemperatureUnit(unit);
    });
  }

  changeTemperatureUnit(unit: TemperatureUnit): void {
    this.tempUnit = unit;
  }
}
