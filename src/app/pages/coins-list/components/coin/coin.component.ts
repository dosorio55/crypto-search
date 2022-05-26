import { Component, Input, OnInit } from '@angular/core';
import { WatchListService } from 'src/app/core/services/watchList/watch-list.service';
import { ICoins } from '../../../../core/services/models/product.models';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {

  public currencyCoin: string = "USD"

  @Input() public coins?: ICoins;

  constructor(private watchListService: WatchListService) { }

  ngOnInit(): void {
  }

  public addToWatchList(coin: ICoins){
    this.watchListService.addCoinToWatchlist({
      "id": coin.id,
      "name": coin.name,
      "price": coin.current_price
  }).subscribe((res) => console.log(coin.id))
  }

}
