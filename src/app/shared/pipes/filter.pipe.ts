import { Pipe, PipeTransform } from '@angular/core';
import { ICoins } from 'src/app/core/services/models/product.models';

const PageLimit : number = 20;
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ICoins[], filteredCoins: string, page: number): ICoins[] {
    filteredCoins !== "" ? page = 0 : page
    // if(filteredCoins !== ""){
    //   page = 0
    // }
    const init = page * PageLimit;
    const end = init + PageLimit;
    return value.filter(coins => coins.name.toLocaleLowerCase()
    .includes(filteredCoins.toLocaleLowerCase()))
    .slice(init, end);
  }

}
