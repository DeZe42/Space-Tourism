import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyComponent } from './technology/technology.component';
import { TechnologyRoutingModule } from './technology-routing.module';
import { TechComponent } from './tech/tech.component';
import { SpacePortComponent } from './space-port/space-port.component';
import { SpaceComponent } from './space/space.component';
import { LaunchComponent } from './launch/launch.component';

@NgModule({
  declarations: [
      TechnologyComponent,
      TechComponent,
      SpacePortComponent,
      SpaceComponent,
      LaunchComponent
  ],
  imports: [
      CommonModule,
      TechnologyRoutingModule
  ]
})
export class TechnologyModule { }