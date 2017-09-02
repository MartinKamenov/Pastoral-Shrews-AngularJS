import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ICar } from './../cars.models';
import {CarsService} from './../cars.service';

@Component({
  selector: 'app-cars-create',
  templateUrl: './cars-create.component.html',
  styleUrls: ['./cars-create.component.css']
})
export class CarsCreateComponent {

  model= new ICar('', '');
  brands= ['Alpha Romeo',
  'Audi',
  'BMW',
  'Chevrolet',
  'Citroen',
  'Dacia',
  'Fiat',
  'Ford',
  'Great wall',
  'Honda'
  ];

   engines = [
    'Benzin',
    'Diesel',
    'Electric',
    'LPG',
    'Natural Gas'
   ];
transmissions = [
    'Manual',
    'Automatic'
   ];


  constructor(private carsService: CarsService) { }
  create(carDb: ICar) {
    this.carsService.createCar(carDb);
  }


}
