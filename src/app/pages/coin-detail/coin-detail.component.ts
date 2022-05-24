import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICoins } from '../../core/services/models/product.models';
import { CoinsService } from 'src/app/core/services/coins/coins.service';
import { Observable } from 'rxjs';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent implements OnInit {

  public currentCoin$?: Observable<ICoins[]>;
  // public searchValue: string = ""

  constructor(private activatedRoute: ActivatedRoute,
    private coinService: CoinsService) { }

  ngOnInit(): void {

    let marketDates: string[] = [];
    let marketPrices: string[] = [];

    this.activatedRoute.params.subscribe((params) => {
      const CoinId = params['id'];
      this.currentCoin$ = this.coinService.getCoinById(CoinId);
      this.coinService.getMarketRange(CoinId).subscribe((coinMarketRange) => {
        coinMarketRange.prices.map(data => {
          let unixToDate = new Date(data[0])
          marketDates.push(`${unixToDate.getDate()}/${unixToDate.getMonth()}/${unixToDate.getFullYear()}`)
          let priceToFixed = data[1].toFixed(2) 
          marketPrices.push(priceToFixed)
        })
        //Draw Chart
        const myChart = new Chart("myChart", {
          type: 'bar',
          data: {
            datasets: [{
              label: CoinId,
              data: marketPrices,
              backgroundColor: 'red',
              borderColor: 'black',
            }],
            labels: marketDates
          },

          options: {
            scales: {
              y: {
                beginAtZero: false
              }
            }
          }
        });
      });
    })

  }
}
