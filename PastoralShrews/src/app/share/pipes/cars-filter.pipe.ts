import { brands } from './../data-models';
import { Pipe, PipeTransform } from '@angular/core';
import { ICar } from '../../cars/cars.models';

@Pipe({
    name: 'filterBy'
})
export class CarsFilterPipe implements PipeTransform {
    transform(cars: any[], filterByLocation: string,
            filterByBrands: string, filterMaxPrice: number): any[] {
        if (cars) {
            console.log(cars);
            console.log(filterByLocation);
            console.log(filterByBrands);
            console.log(filterMaxPrice);
            // if (!filterByLocation && !filterByBrands && filterMaxPrice ) {
            //     return cars;
            // }
            filterByLocation = filterByLocation || '';
            filterByBrands = filterByBrands || '';
            filterMaxPrice = filterMaxPrice || Number.MAX_SAFE_INTEGER;

            console.log(cars);
            const filteredCars = cars
                .filter(ad => (ad.location.toLowerCase().indexOf(filterByLocation.toLowerCase()) >= 0))
                .filter(ad => (ad.brand.toLowerCase().indexOf(filterByBrands.toLowerCase()) >= 0))
                .filter(ad => (ad.price <= filterMaxPrice));
            console.log(filteredCars);
            return filteredCars;
        }
    }
}
