import { Component, Input, OnInit } from '@angular/core';
import { ICoins } from '../../../../core/services/models/product.models';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {

  public currencyCoin: string = "USD"

  @Input() public coins?: ICoins;

  constructor() { }

  ngOnInit(): void {
  }

}
