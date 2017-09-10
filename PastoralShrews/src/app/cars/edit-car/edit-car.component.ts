import { FirebaseObjectObservable } from 'angularfire2/database';
import { CarsService } from './../cars.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ICar } from '../cars.models';
import {brands, engines, transmissions, locations, types, motorcycleBrands } from '../../share/data-models';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  brands= brands;
  motorcycleBrands = motorcycleBrands;
  locations = locations;
  engines = engines;
  transmissions = transmissions;
  private model: FormControl;

  myDBForm: FormGroup;
  selectedFile: any;
  carKey: string;
  car: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private carsService: CarsService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.carsService.getCar(params.get('id')))
      .subscribe((car: ICar) => {
        this.car = car;
        this.myDBForm = this.fb.group({
          model: [car.model, Validators.required],
          brand: [car.brand, Validators.required],
          year: [car.year, Validators.required],
          location: [car.location, Validators.required],
          transmission: [car.transmission, Validators.required],
          power: [car.power, Validators.required],
          color: [car.color, Validators.required],
          description: [car.description, Validators.required],
          engine: [car.engine, Validators.required],
          image: [car.image, Validators.required],
          price: [car.price, Validators.required],
          type: [car.type, Validators.required],
        });

        console.log(car.type);
      });



    this.carKey = this.route.snapshot.params['id'];

  }

onUpdateCar(newCar: ICar) {
  console.log(newCar);
   console.log('update');
  this.carsService.updateCar(this.carKey, newCar);

  this.router.navigate(['cars/profile']);
  }
}
