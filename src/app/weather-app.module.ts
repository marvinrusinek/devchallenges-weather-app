import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { WeatherAppComponent } from './weather-app.component';
import { FooterComponent } from './weather-app/containers/footer/footer.component';
import { TemperaturePipe } from './weather-app/shared/pipes/temperature.pipe';
import { MainContainerComponent } from './weather-app/containers/main-container/main-container.component';
import { ForecastContainerComponent } from './weather-app/containers/forecast-container/forecast-container.component';
import { ForecastDetailComponent } from './weather-app/containers/forecast-container/forecast-detail/forecast-detail.component';
import { AsideDetailComponent } from './weather-app/containers/aside-panel/aside-detail/aside-detail.component';
import { AsidePanelComponent } from './weather-app/containers/aside-panel/aside-panel.component';
import { AsideLocationComponent } from './weather-app/containers/aside-panel/aside-location/aside-location.component';
import { StatsContainerComponent } from './weather-app/containers/stats-container/stats-container.component';
import { WeatherIconComponent } from './weather-app/containers/weather-icon/weather-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'weather-app',
    pathMatch: 'full'
  },
  {
    path: 'weather-app',
    loadChildren: () =>
      import('./weather-app/routing/weather-app-routing.module').then(m => m.WeatherAppRoutingModule)
  }
];

@NgModule({
  declarations: [
    WeatherAppComponent,
    MainContainerComponent,
    FooterComponent,
    TemperaturePipe,
    ForecastContainerComponent,
    ForecastDetailComponent,
    AsideDetailComponent,
    AsidePanelComponent,
    AsideLocationComponent,
    StatsContainerComponent,
    WeatherIconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [WeatherAppComponent]
})
export class WeatherAppModule { }
