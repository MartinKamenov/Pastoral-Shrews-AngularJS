import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ICar } from './cars.models';
import { ToasterService, Toast } from 'angular2-toaster';
import { AuthService } from '../core/auth.service';


@Injectable()
export class CarsService  {
  cars: FirebaseListObservable<ICar[]> = null; //  list of objects
  car: FirebaseObjectObservable<ICar> = null; //   single object

  constructor(
    private db: AngularFireDatabase,
    public auth: AuthService,
    private toasterService: ToasterService) {
    // this.cars = this.db.list('/cars');
   }
  getCarsList(query = {}): FirebaseListObservable<ICar[]> {
    this.cars = this.db.list('/cars', {
        query: query
    });
    return this.cars;
}

// Return a single observable car
getCar(key: string): FirebaseObjectObservable<ICar> {
    const advPath = `/cars/${key}`;
    this.car = this.db.object(advPath);
    return this.car;
}

// Create a brand new car
createCar(car: ICar): void {
    car.userEmail = this.auth.currentUserEmail;
    this.cars = this.db.list('/cars');
    this.cars.push(car)
    .then(() => this.toasterService.pop('success', `New car created`))
    .catch(error => this.handleError(error));
}

// Delete a single car
deleteCar(key: string): void {
    this.cars.remove(key)
        .catch(error => this.handleError(error));
}
  // Edit a single car
updateCar(key: string, value: any): void {
    console.log(key);
    console.log(value);
    this.cars.update(key, value)
    .then(() => this.toasterService.pop('success', `Car Edited`))
      .catch(error => this.handleError(error));
  }


// Default error handling for all actions
private handleError(error) {
    this.toasterService.pop('error', error.massage);
}
}

