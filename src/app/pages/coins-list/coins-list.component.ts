import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { coins } from './coins-list.config';
import { ICoins } from './models/product.models';

@Component({
  selector: 'app-coins-list',
  templateUrl: './coins-list.component.html',
  styleUrls: ['./coins-list.component.scss']
})
export class CoinsListComponent implements OnInit {

  public coinsList : ICoins[] = coins;
  public filteredCoins: ICoins[] =  this.coinsList;
  public searchValue: string = "";

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params: any = this.activatedRoute;
    console.log(params)
  }

  onSearch(){
    this.filteredCoins = this.coinsList.filter(coins => coins.name.toLocaleLowerCase()
    .includes(this.searchValue.toLocaleLowerCase()))
  }

}
