import { Component, OnInit } from '@angular/core';
import { CoinsService } from 'src/app/core/services/coins/coins.service';
import { ICoins } from 'src/app/core/services/models/product.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public coinsList?: ICoins[];
  public viewCoins?: ICoins[]


  constructor(private coinsService: CoinsService) { }

  ngOnInit(): void {
    this.coinsService.getCoins().subscribe((coins) => {
      this.coinsList = coins;
      this.viewCoins = this.coinsList?.slice(7, 11);
    })

  }


}
