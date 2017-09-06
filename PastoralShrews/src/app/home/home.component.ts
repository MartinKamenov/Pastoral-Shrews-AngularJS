import { element } from 'protractor';
import { ICar } from './../cars/cars.models';
import { Component, OnInit } from '@angular/core';
import { CarsService } from './../cars/cars.service';
import { HomeSearchComponent } from './search/home-search.component';
import { FilterService } from './search/home-search.service';
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

  constructor(public carsService: CarsService, public FilterService: FilterService) { }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    this.filteredCars = this.FilterService.filter(searchText, ['model', 'year', 'brand', 'location'],
                                                  this.cars);
  }

  getCars() {
    this.carsService.getCarsList()
      .subscribe(cars => {
        console.log(cars);
        this.cars = this.filteredCars = cars;
      });

  }

  ngOnInit() {
    this.getCars();
  }

 /* ngOnInit() {
    this.carsService.getCarsList().subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        console.log(snapshot);
        this.cars.push(snapshot);
      });
    });

    console.log(this.cars);
  }*/

}
