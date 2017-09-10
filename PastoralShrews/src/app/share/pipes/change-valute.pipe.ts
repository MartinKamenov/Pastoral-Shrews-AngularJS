import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showInEuros'
})
export class FormatFileSizePipe implements PipeTransform {
  transform(valueInDollars: string): string {
    const euroToDollar = 1.203535;
    const valueInDollarsNum = +valueInDollars;
    const valueInEuro = valueInDollarsNum * euroToDollar;
    const result = Math.round(valueInEuro);
    return `${result}`;
  }
}
