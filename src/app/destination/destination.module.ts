import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationComponent } from './destination/destination.component';
import { DestinationRoutingModule } from './destination-routing.module';
import { PlanetComponent } from './planet/planet.component';
import { MoonComponent } from './moon/moon.component';
import { MarsComponent } from './mars/mars.component';
import { EuropaComponent } from './europa/europa.component';
import { TitanComponent } from './titan/titan.component';

@NgModule({
  declarations: [
      DestinationComponent,
      PlanetComponent,
      MoonComponent,
      MarsComponent,
      EuropaComponent,
      TitanComponent
  ],
  imports: [
      CommonModule,
      DestinationRoutingModule
  ]
})
export class DestinationModule { }