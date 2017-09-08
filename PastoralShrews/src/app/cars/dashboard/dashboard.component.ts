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
carsList: FirebaseListObservable<ICar[]>;
page = 1;
  constructor(public auth: AuthService, private carSrv: CarsService) { }

  ngOnInit() {
    this.carsList = this.carSrv.getCarsList(
      {
        orderByChild: 'userEmail',
        equalTo: this.auth.currentUserEmail
      }
    );
    console.log(this.carsList);
     }
  deleteCar(carToDelete) {
    this.carSrv.deleteCar(carToDelete);
  }
  editCar(carToEdit) {
    console.log(carToEdit);
  }
}
