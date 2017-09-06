import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsCreateComponent } from './cars-create/cars-create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../core/auth.guard';
import { CarDetailsComponent } from './car-details/car-details.component';
import { EditCarComponent } from './edit-car/edit-car.component';

const routes: Routes = [
  {path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'create', component: CarsCreateComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'details/:id', component: CarDetailsComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditCarComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
