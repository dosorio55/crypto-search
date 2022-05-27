import { Component, OnInit } from '@angular/core';
import { CoinsService } from 'src/app/core/services/coins/coins.service';
import { WatchListService } from 'src/app/core/services/watchList/watch-list.service';
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
    //coin service to get products
    private coinsService: CoinsService,
    ) { }


  //suscribe to the api to get products
  ngOnInit(): void {
    this.coinsService.getCoins().subscribe((coins) => {
     this.coinsList = coins;
    })
  }
  
  public pageNumberFunction(actualPage : number){
    this.pageNumber = actualPage
  }
  
}
