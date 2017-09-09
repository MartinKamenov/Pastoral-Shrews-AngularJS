import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ICar } from './../cars.models';
import { CarsService } from './../cars.service';
import {brands, engines, transmissions, locations} from '../../share/data-models';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
    private carsService: CarsService,
     private router: Router,
    private route: ActivatedRoute) { }
  create(carDb: ICar) {
    this.carsService.createCar(carDb);

    this.router.navigate(['cars/profile']);
  }


}
