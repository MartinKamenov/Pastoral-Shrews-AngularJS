import { CarsService } from './../cars.service';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ICar } from '../cars.models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  searchBrand: any;
  searchLocation: any;
  searchMaxPrice: number;
 cars: FirebaseListObservable<ICar[]>;
  sortBy: string;
  sortByKey: string;
  sortByOptions: string[];
  order: string;
  sortByField: string;
  page = 1;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private carsService: CarsService,
  ) { }
  ngOnInit() {
    this.sortByOptions = ['date', 'location', 'brand', 'price'];
    this.sortBy = 'date';
    this.sortByField = '$key';
    this.sortByKey = '-$key';
    this.order = 'desc';
    this.searchLocation = this.route.snapshot.params['location'];
    this.searchBrand = this.route.snapshot.params['brand'];
    this.searchMaxPrice = +this.route.snapshot.params['price'];
    this.cars = this.carsService.getCarsList();

  }
  onSortByChange(e: any) {
    this.sortBy = e.target.value;
    if (this.sortBy === 'date') {
      this.sortByField = '$key';
    } else if (this.sortBy === 'location') {
      this.sortByField = 'location';
    } else if (this.sortBy === 'brand') {
      this.sortByField = 'brand';
    } else if (this.sortBy === 'price') {
      this.sortByField = 'price';
    }

    this.sortByKey = this.sortByField;
    if (this.order === 'desc') {
      this.sortByKey = '-' + this.sortByField;
    }
  }

  onOrderChange(e: any) {
    this.order = e.target.value;
    this.sortByKey = this.sortByField;
    if (this.order === 'desc') {
      this.sortByKey = '-' + this.sortByField;
    }
  }

}
