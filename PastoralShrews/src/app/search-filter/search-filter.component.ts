import { Component, OnInit } from '@angular/core';
import { ICar } from '../cars/cars.models';
import { brands, locations } from './../share/data-models';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  model= new ICar();
  brands= brands;
  locations = locations;
  constructor() { }

  ngOnInit() {
  }

}
