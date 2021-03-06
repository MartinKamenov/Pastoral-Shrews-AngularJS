import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsCreateComponent } from './cars-create/cars-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarsService } from './cars.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { SortPipe } from '../share/pipes/sort.pipe';
import { CarsFilterPipe } from '../share/pipes/cars-filter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoadingSpinnerComponent } from '../share/loading-spinner/loading-spinner.component';
import { FormatFileSizePipe } from '../share/pipes/change-valute.pipe';

@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [
    CarsCreateComponent,
    DashboardComponent,
    CarDetailsComponent,
    EditCarComponent,
    CarsListComponent,
    CarsFilterPipe,
    SortPipe,
    LoadingSpinnerComponent,
    FormatFileSizePipe
  ],
  providers: [
    CarsService
  ],
  exports: [LoadingSpinnerComponent,
  FormatFileSizePipe]

})
export class CarsModule { }
