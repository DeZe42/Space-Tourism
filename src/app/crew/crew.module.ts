import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewComponent } from './crew/crew.component';
import { CrewRoutingModule } from './crew-routing.module';
import { CommanderComponent } from './commander/commander.component';
import { SpecialistComponent } from './specialist/specialist.component';
import { PilotComponent } from './pilot/pilot.component';
import { EngineerComponent } from './engineer/engineer.component';
import { MemberComponent } from './member/member.component';

@NgModule({
  declarations: [
      CrewComponent,
      CommanderComponent,
      SpecialistComponent,
      PilotComponent,
      EngineerComponent,
      MemberComponent
  ],
  imports: [
      CommonModule,
      CrewRoutingModule
  ]
})
export class CrewModule { }