import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsCreateComponent } from './cars-create/cars-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarsService } from './cars.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { EditCarComponent } from './edit-car/edit-car.component';

@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CarsCreateComponent, DashboardComponent, CarDetailsComponent, EditCarComponent],
  providers: [
    CarsService
  ]
})
export class CarsModule { }
