import { Component, Input, OnInit } from '@angular/core';
import { ICoins } from '../../models/product.models';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {

  @Input() public coins?: ICoins;

  constructor() { }

  ngOnInit(): void {
  }

}
