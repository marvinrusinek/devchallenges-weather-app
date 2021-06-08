import { Component, OnInit } from '@angular/core';
import { TemperatureService, TemperatureUnit } from '../../shared/services/temperature.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  TemperatureUnit = TemperatureUnit;
  tempUnit = TemperatureUnit.CELSIUS;

  constructor(private temperatureService: TemperatureService) {}

  ngOnInit(): void {
    this.temperatureService.getTemperatureUnit().subscribe((unit: any) => {
      this.tempUnit = unit;
    });
  }

  changeTemperatureUnit(unit: TemperatureUnit): void {
    this.temperatureService.setTemperatureUnit(unit);
  }
}
