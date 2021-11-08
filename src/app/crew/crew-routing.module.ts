import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommanderComponent } from './commander/commander.component';
import { CrewComponent } from './crew/crew.component';
import { EngineerComponent } from './engineer/engineer.component';
import { PilotComponent } from './pilot/pilot.component';
import { SpecialistComponent } from './specialist/specialist.component';

const routes: Routes = [
    { path: '', component: CrewComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'commander' },
      { path: 'commander', component: CommanderComponent },
      { path: 'specialist', component: SpecialistComponent },
      { path: 'pilot', component: PilotComponent },
      { path: 'engineer', component: EngineerComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrewRoutingModule { }