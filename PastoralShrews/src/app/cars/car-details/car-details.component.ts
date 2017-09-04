import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../cars.service';
import { ICar } from '../cars.models';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  carKey: string;
  curentCar: FirebaseObjectObservable<ICar>;

  constructor(
     private route: ActivatedRoute,
    private carService: CarsService
  ) { }

  ngOnInit() {
    this.carKey = this.route.snapshot.params['id'];
    console.log(this.carKey);
    this.curentCar = this.carService.getCar(this.carKey);
    console.log(this.curentCar);
  }

}
