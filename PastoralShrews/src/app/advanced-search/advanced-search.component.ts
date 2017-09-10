import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { FilterService } from './filter/filter.service';
import { CarsService } from './../cars/cars.service';
import { ICar } from './../cars/cars.models';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
    selector: 'app-advanced-search',
    templateUrl: './advanced-search.component.html',
    styleUrls: ['../../assets/vendor/bootstrap/css/bootstrap.css',
    '../../assets/css/shop-homepage.css']
})

export class AdvancedSearchComponent implements OnInit {
    cars: Array<ICar>;
    filteredCars = this.cars;
    page = 1;

    constructor(public carsService: CarsService, public filterService: FilterService) {

    }

    filterChanged(searchText: string) {
        this.filteredCars = this.filterService.filter(searchText, ['model', 'year', 'brand', 'location'],
                                                      this.cars);
    }

    getCars() {
        this.carsService.getCarsList()
            .subscribe(cars => {
                this.cars = this.filteredCars = cars;
            });
    }

    ngOnInit() {
        this.getCars();
    }
}
