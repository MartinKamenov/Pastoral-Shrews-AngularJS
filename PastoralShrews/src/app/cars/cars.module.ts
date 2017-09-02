import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsCreateComponent } from './cars-create/cars-create.component';
import { FormsModule } from '@angular/forms';
import { CarsService } from './cars.service';

@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule,
    FormsModule
  ],
  declarations: [CarsCreateComponent],
  providers: [
    CarsService
  ]
})
export class CarsModule { }
