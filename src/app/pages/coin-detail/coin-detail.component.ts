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
  public searchValue: string = ""
  // private coinDates: number[] = [];
  // private coinPrices: number[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private coinService: CoinsService) { }

  ngOnInit(): void {

    let marketDates: number[] = [];
    let marketPrices: number[] = [];

    this.activatedRoute.params.subscribe((params) => {
      const CoinId = params['id'];
      this.currentCoin$ = this.coinService.getCoinById(CoinId);
      this.coinService.getMarketRange(CoinId).subscribe((coinMarketRange) => {
        for (let index = 0; index < 200; index++) {
  
          const datePrices = coinMarketRange.prices[index][0];
          const pricesP = coinMarketRange.prices[index][1];  
  
          marketDates.push(datePrices)
          marketPrices.push(pricesP)
  
        }
        const myChart = new Chart("myChart", {
          type: 'bar',
          data: {
            datasets: [{
              label: 'test',
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
