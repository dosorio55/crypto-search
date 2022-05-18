import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { coins } from '../coins-list/coins-list.config';
import { ICoins } from '../coins-list/models/product.models';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent implements OnInit {

  public coinsList : ICoins[] = coins;
  public currentCoin?: ICoins;
  public searchValue: string = ""


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>{
      const paramId = params['id'];
      this.currentCoin = this.coinsList.find(coin => coin.id === paramId)
    })
  }


}
