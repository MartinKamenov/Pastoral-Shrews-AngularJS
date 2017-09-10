import { ICar } from './../../cars/cars.models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-last-cars',
  templateUrl: './last-cars.component.html',
  // styleUrls: ['./last-cars.component.css']
  styleUrls: ['../../../assets/vendor/bootstrap/css/bootstrap.css',
  '../../../assets/css/shop-homepage.css']
})
export class LastCarsComponent implements OnInit {

  @Input() cars: ICar;
  constructor() { }

  ngOnInit() {
  }

}
