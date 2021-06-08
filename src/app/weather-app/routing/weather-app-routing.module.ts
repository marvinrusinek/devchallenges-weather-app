import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainContainerComponent } from '../containers/main-container/main-container.component';

const routes: Routes = [
  { path: 'main', component: MainContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherAppRoutingModule { }
