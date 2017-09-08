import { Component, OnInit } from '@angular/core';
import { ICar } from '../cars/cars.models';
import { brands, locations } from './../share/data-models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  model= new ICar();
  brands= brands;
  locations = locations;

  searchLocation: string;
  searchBrand: string;
  searchPrice: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onChange(e: any) {
    if (e.target.name === 'location') {
      this.searchLocation = e.target.value;
    } else if (e.target.name === 'brand') {
      this.searchBrand = e.target.value;
    }
  }
  onInput(e: any) {
    if (e.target.name === 'price') {
      this.searchPrice = e.target.value;
    }
  }
  findRecords() {
    const queryParams = {};

    if (this.searchLocation && this.searchLocation !== '') {
      queryParams['location'] = this.searchLocation;
    }

    if (this.searchBrand && this.searchBrand !== '') {
      queryParams['brand'] = this.searchBrand;
    }

    if (this.searchPrice && this.searchPrice !== '') {
      queryParams['price'] = this.searchPrice;
    }

    this.router.navigate(['/cars/all', queryParams]);
  }

}
