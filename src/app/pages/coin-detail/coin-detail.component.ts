import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICoins } from '../../core/services/coins/models/product.models';
import { CoinsService } from 'src/app/core/services/coins/coins.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent implements OnInit {

  public currentCoin$?: Observable<ICoins[]>;
  public searchValue: string = ""
  // public currentCoin?: ICoins;
  // public actualCoinId: string = ""


  constructor(private activatedRoute: ActivatedRoute,
    private coinService: CoinsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const CoinId = params['id'];
      // this.actualCoinId = params['id'];
     this.currentCoin$ = this.coinService.getCoinById(CoinId);
      // .subscribe((coin) => {

      //    const dealCoin = coin[this.actualCoinId]
      //    this.currentCoin = dealCoin;
      //   console.log(coin)
      //   console.log(dealCoin.usd)
      // });
    })
  }
}
