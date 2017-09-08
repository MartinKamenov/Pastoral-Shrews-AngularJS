import { element } from 'protractor';
import { ICar } from './../cars/cars.models';
import { Component, OnInit } from '@angular/core';
import { CarsService } from './../cars/cars.service';
import { HomeSearchComponent } from './search/home-search.component';
// import { FilterService } from './search/home-search.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../assets/vendor/bootstrap/css/bootstrap.css',
  '../../assets/css/shop-homepage.css']
})
export class HomeComponent implements OnInit {
  cars: Array<ICar> = [];
  filteredCars = this.cars;
  constructor(public carsService: CarsService) { }

  getCars() {
    this.carsService.getCarsList({
      orderByChild: 'timeStamp',
      limitToLast: 6
  })
      .subscribe(cars => {
        console.log(cars);
        this.cars = cars;
      });

  }

  ngOnInit() {
    this.getCars();
  }
}
