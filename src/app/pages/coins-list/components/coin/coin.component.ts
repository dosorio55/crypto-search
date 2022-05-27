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
  public coinInWatchList: boolean = false

  @Input() public coins?: ICoins;

  constructor(private watchListService: WatchListService) { }

  ngOnInit(): void {
  }

  public addToWatchList(coin: ICoins){
    this.watchListService.addCoinToWatchlist({
      "_id": coin.id,
      "name": coin.name,
      "price": coin.current_price
  }).subscribe({
    next: (res) => console.log(this.coinInWatchList),
    error: (err) => {
      this.coinInWatchList = true
    return console.log(this.coinInWatchList)
    }
  }  )
  }

  public deleteWatchedCoin(idCoin: string){
    console.log(idCoin)
    this.watchListService.deleteWCoin(idCoin).subscribe((coin) => console.log('eliminado', coin))
  }

}
