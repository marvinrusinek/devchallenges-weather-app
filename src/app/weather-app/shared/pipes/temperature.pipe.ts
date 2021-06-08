import { Pipe, PipeTransform } from '@angular/core';
import { formatNumber } from '@angular/common';

import { TemperatureUnit } from '../services/temperature.service';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {

  constructor() {}

  transform(temperatureInCelsius: number | undefined, unit: TemperatureUnit, ...args: unknown[]): string {
    let temp = temperatureInCelsius || 0;
    if (unit === TemperatureUnit.FAHRENHEIT) {
      temp = this.convertCToF(temp);
    }
    return formatNumber(temp, 'en', '1.0-0');
  }

  convertCToF(temp: number): number {
    return ((temp * 9) / 5) + 32;
  }
}
