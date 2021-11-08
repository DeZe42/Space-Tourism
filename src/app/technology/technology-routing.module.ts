import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchComponent } from './launch/launch.component';
import { SpacePortComponent } from './space-port/space-port.component';
import { SpaceComponent } from './space/space.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  { path: '', component: TechnologyComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'launch' },
    { path: 'launch', component: LaunchComponent },
    { path: 'spaceport', component: SpacePortComponent },
    { path: 'space', component: SpaceComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologyRoutingModule { }