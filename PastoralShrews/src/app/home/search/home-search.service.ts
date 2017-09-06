import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {
    filter(data: string, properties: Array<string>, orignalList: Array<any>) {
        let filteredList: any[];
        if  (data && properties && orignalList) {

            data = data.toLocaleLowerCase();
            let filtered = orignalList.filter(item => {
                let match = false;
                for (let prop of properties) {
                    if (item[prop].toString().toLowerCase().indexOf(data) > -1) {
                        match = true;
                        break;
                    }
                }
                return match;
            });
            filteredList = filtered;
        } else {
            filteredList = orignalList;
        }
        console.log(filteredList);
        return filteredList;
    }
}
