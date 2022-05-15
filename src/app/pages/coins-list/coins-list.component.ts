import { Component, OnInit } from '@angular/core';
import { coins, ICoins } from './coins-list.config';

@Component({
  selector: 'app-coins-list',
  templateUrl: './coins-list.component.html',
  styleUrls: ['./coins-list.component.scss']
})
export class CoinsListComponent implements OnInit {

  public coinsList : ICoins[] = coins

  constructor() { }

  ngOnInit(): void {
  }

}
