import { Component, OnInit, Input } from '@angular/core';
import { ICar } from '../../cars/cars.models';

@Component({
  selector: 'app-caurosel',
  templateUrl: './caurosel.component.html',
  // styleUrls: ['./caurosel.component.css']
  styleUrls: ['../../../assets/vendor/bootstrap/css/bootstrap.css',
  '../../../assets/css/shop-homepage.css']
})
export class CauroselComponent implements OnInit {
  @Input() cars: any;

  constructor() {
   }

  ngOnInit() {
    console.log(this.cars);
  }

}
