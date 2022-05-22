import { Component, OnInit } from '@angular/core';
import { CoinsService } from 'src/app/core/services/coins/coins.service';
import { ICoins } from '../../core/services/models/product.models';

@Component({
  selector: 'app-coins-list',
  templateUrl: './coins-list.component.html',
  styleUrls: ['./coins-list.component.scss']
})
export class CoinsListComponent implements OnInit {

  public coinsList?: ICoins[];
  public searchValue: string = "";
  public pageNumber: number = 0;

  constructor(
    private coinsService: CoinsService
    ) { }


  //petición de suscribe a la api
  ngOnInit(): void {
    this.coinsService.getCoins().subscribe((coins) => {
     this.coinsList = coins;
    })
  }

  // onSearch(){
  //   this.filteredCoins = this.coinsList?.filter(coins => coins.name.toLocaleLowerCase()
  //   .includes(this.searchValue.toLocaleLowerCase()))
  // }

}
