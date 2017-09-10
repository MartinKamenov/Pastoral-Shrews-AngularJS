import { brands } from './../data-models';
import { Pipe, PipeTransform } from '@angular/core';
import { ICar } from '../../cars/cars.models';

@Pipe({
    name: 'filterBy'
})
export class CarsFilterPipe implements PipeTransform {
    transform(cars: any[], filterByType: string, filterByLocation: string,
            filterByBrands: string, filterMaxPrice: number): any[] {
        if (cars) {
            filterByType = filterByType || '';
            filterByLocation = filterByLocation || '';
            filterByBrands = filterByBrands || '';
            filterMaxPrice = filterMaxPrice || Number.MAX_SAFE_INTEGER;
            const filteredCars = cars
                .filter(ad => (ad.type.toLowerCase().indexOf(filterByType.toLowerCase()) >= 0))
                .filter(ad => (ad.location.toLowerCase().indexOf(filterByLocation.toLowerCase()) >= 0))
                .filter(ad => (ad.brand.toLowerCase().indexOf(filterByBrands.toLowerCase()) >= 0))
                .filter(ad => (ad.price <= filterMaxPrice));

            return filteredCars;
        }
    }
}
