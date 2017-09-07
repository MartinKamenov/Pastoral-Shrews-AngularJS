import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ICar } from './../cars.models';
import { CarsService } from './../cars.service';
import {brands, engines, transmissions, locations} from '../../share/data-models';

@Component({
  selector: 'app-cars-create',
  templateUrl: './cars-create.component.html',
  styleUrls: ['./cars-create.component.css']
})
export class CarsCreateComponent {

  model= new ICar();
  brands = brands;
  locations = locations;
  engines = engines;
  transmissions = transmissions;

  constructor(private carsService: CarsService) { }
  create(carDb: ICar) {
    this.carsService.createCar(carDb);
  }


}
