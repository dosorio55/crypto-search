import { Component, OnInit } from '@angular/core';
import { CoinsService } from 'src/app/core/services/coins/coins.service';
import { ICoins } from '../../core/services/coins/models/product.models';

@Component({
  selector: 'app-coins-list',
  templateUrl: './coins-list.component.html',
  styleUrls: ['./coins-list.component.scss']
})
export class CoinsListComponent implements OnInit {

  public coinsList?: ICoins[];
  public filteredCoins?: ICoins[] =  this.coinsList;
  public searchValue: string = "";

  constructor(
    private coinsService: CoinsService
    ) { }


  //petición de suscribe a la api
  ngOnInit(): void {
    this.coinsService.getCoins().subscribe((coins) => {
     this.coinsList = coins;
     console.log(this.coinsList)
     this.filteredCoins = coins
    })
  }

  onSearch(){
    this.filteredCoins = this.coinsList?.filter(coins => coins.name.toLocaleLowerCase()
    .includes(this.searchValue.toLocaleLowerCase()))
  }

}
