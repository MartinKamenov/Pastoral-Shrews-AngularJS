import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsCreateComponent } from './cars-create/cars-create.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // { path: '', component: CarsListComponent},
  { path: 'create', component: CarsCreateComponent},
  { path: 'profile', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
