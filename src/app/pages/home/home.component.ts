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
  public viewCoins?: ICoins[];
  private randomNumberA?: number
  private randomNumberB?: number



  constructor(private coinsService: CoinsService) { }

  ngOnInit(): void {
    this.coinsService.getCoins().subscribe((coins) => {
      this.coinsList = coins;
      this.randomNumberA = Math.floor(Math.random() * 95)
      this.randomNumberB = this.randomNumberA + 4
      this.viewCoins = this.coinsList?.slice(this.randomNumberA, this.randomNumberB);
      this.timeOutNumber()
    })

  }

  private timeOutNumber() {
    for (let index = 0; index < 20; index++) {
      setTimeout(() => {
        this.randomNumberA = Math.floor(Math.random() * 95)
        this.randomNumberB = this.randomNumberA + 4
        this.viewCoins = this.coinsList?.slice(this.randomNumberA, this.randomNumberB);
      }, 5000);
     //set interval  
    }
  }

}
