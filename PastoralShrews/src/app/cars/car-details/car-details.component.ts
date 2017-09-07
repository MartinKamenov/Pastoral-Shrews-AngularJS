import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { CarsService } from '../cars.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ICar } from '../cars.models';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  carKey: string;

  myDBForm: FormGroup;
  // curentCar: FirebaseObjectObservable<ICar>;

  car: ICar;
  comment: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private carsService: CarsService
  ) {
   }

  ngOnInit() {
    this.carKey = this.route.snapshot.params['id'];
    // console.log(this.carKey);
    this.carsService.getCar(this.carKey)
    .subscribe((car: ICar) => this.car = car);
    // console.log(this.curentCar);
  }

  addComent(comment: string) {
    console.log(comment);

    if (!this.car.comments) {

      const comments = [];
      comments.push(comment);
      this.car.comments = comments;
    }else {
      this.car.comments.push(comment);
    }

  // car.comments.push('koko');
    console.log(this.car);
    this.carsService.updateCarComment(this.carKey, this.car);
  }

  logObject(object: any) {
    console.log(object);
  }
}
