import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsCreateComponent } from './cars-create/cars-create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../core/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'create', component: CarsCreateComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: DashboardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
