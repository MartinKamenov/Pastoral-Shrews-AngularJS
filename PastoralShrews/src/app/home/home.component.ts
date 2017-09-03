import { element } from 'protractor';
import { ICar } from './../cars/cars.models';
import { Component, OnInit } from '@angular/core';
import { CarsService } from './../cars/cars.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../assets/vendor/bootstrap/css/bootstrap.css',
  '../../assets/css/shop-homepage.css']
})
export class HomeComponent implements OnInit {
  cars: Array<Object> = [];

  constructor(public carsService: CarsService) { }

  ngOnInit() {
    this.carsService.getCarsList().subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        console.log(snapshot);
        this.cars.push(snapshot);
      });
    });

    console.log(this.cars);
  }

}
