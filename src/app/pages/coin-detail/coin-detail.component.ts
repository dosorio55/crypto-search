import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { coins } from '../coins-list/coins-list.config';
import { ICoins } from '../../core/services/coins/models/product.models';
import { CoinsService } from 'src/app/core/services/coins/coins.service';
import { ISimpleCoin } from 'src/app/core/services/coins/models/simpleCoin.models';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent implements OnInit {

  // public coinsList : ICoins[] = coins;
  public currentCoin?: ICoins;
  public searchValue: string = ""
  // public actualCoinId: string = ""


  constructor(private activatedRoute: ActivatedRoute,
    private coinService: CoinsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>{
      const CoinId  = params['id'];
      this.coinService.getCoinById(CoinId).subscribe((coin) => {
         this.currentCoin = coin[0]
          console.log(this.currentCoin)
      //  const dealCoin = coin[this.actualCoinId]
      //  this.currentCoin = dealCoin;
      });
    })
  }
}
