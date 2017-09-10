import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showInEuros'
})
export class FormatFileSizePipe implements PipeTransform {
  transform(valueInDollars: string): string {
    const euroToDollar = 0.83088;
    const valueInDollarsNum = +valueInDollars;
    const valueInEuro = valueInDollarsNum * euroToDollar;
    const result = (String)(Math.round(valueInEuro));
    let result2 = '';
    const resultCount = result.length;
    for (let i = 0; i < resultCount; i++) {
      if ((i % 3) === 0 && i !== 0) {
        result2 = ',' + result2;
      }

      result2 = result[resultCount - i - 1] + result2;
    }
    return `${result2}`;
  }
}
