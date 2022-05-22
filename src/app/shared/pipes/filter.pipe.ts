import { Pipe, PipeTransform } from '@angular/core';
import { ICoins } from 'src/app/core/services/models/product.models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ICoins[], filteredCoins: string): ICoins[] {
    return value.filter(coins => coins.name.toLocaleLowerCase()
    .includes(filteredCoins.toLocaleLowerCase()));
  }

}
