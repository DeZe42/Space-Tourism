import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destination', loadChildren: () =>  import('./destination/destination.module').then(m=>m.DestinationModule) },
  { path: 'crew', loadChildren: () =>  import('./crew/crew.module').then(m=>m.CrewModule) },
  { path: 'technology', loadChildren: () =>  import('./technology/technology.module').then(m=>m.TechnologyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }