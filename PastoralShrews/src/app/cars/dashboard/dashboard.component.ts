import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import {CarsService} from '../cars.service';
import {ICar} from './../cars.models';
import {AuthService} from './../../core/auth.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
car: ICar = new ICar();
cars: Array<ICar> = [];
page = 1;
showSpinner = true;
  constructor(public auth: AuthService, private carSrv: CarsService) { }

  ngOnInit() {
this.carSrv.getCarsList(
      {
        orderByChild: 'userEmail',
        equalTo: this.auth.currentUserEmail
      }
    ).subscribe(cars => {
      cars.reverse();
      this.cars = cars;
      this.showSpinner = false;
    });
     }
  deleteCar(carToDelete) {
    this.carSrv.deleteCar(carToDelete);
  }
  editCar(carToEdit) {
    // console.log(carToEdit);
  }
}
