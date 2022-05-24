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
  public daysRange: number = 1;
  public testChart: any; 
  
      public marketDates: string[] = [];
      public marketPrices: string[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private coinService: CoinsService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      const CoinId = params['id'];
      this.currentCoin$ = this.coinService.getCoinById(CoinId);
      this.coinService.getMarketRange(CoinId, this.daysRange).subscribe((coinMarketRange) => {
        coinMarketRange.prices.map(data => {
          let unixToDate = new Date(data[0])
          this.marketDates.push(`${unixToDate.getDate()}/${unixToDate.getMonth()}/${unixToDate.getFullYear()}`)
          let priceToFixed = data[1].toFixed(2)
          this.marketPrices.push(priceToFixed)
        })
        //Draw Chart
        this.testChart = new Chart("myChart", {
          type: 'bar',
          data: {
            datasets: [{
              label: CoinId,
              data: this.marketPrices,
              backgroundColor: 'red',
              borderColor: 'black',
            }],
            labels: this.marketDates
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

  public changeDaysRange(days: number){
    if (this.testChart) {
      this.testChart.destroy();
  }

  this.marketDates = []
  this.marketPrices = []
    this.daysRange = days
    console.log(days)
    this.coinService.getMarketRange('bitcoin', this.daysRange).subscribe((coinMarketRange) => {
      coinMarketRange.prices.map(data => {
        let unixToDate = new Date(data[0])
        this.marketDates.push(`${unixToDate.getDate()}/${unixToDate.getMonth()}/${unixToDate.getFullYear()}`)
        let priceToFixed = data[1].toFixed(2)
        this.marketPrices.push(priceToFixed)
      })
      //Draw Chart
      this.testChart = new Chart("myChart", {
        type: 'bar',
        data: {
          datasets: [{
            label: 'bitcoin',
            data: this.marketPrices,
            backgroundColor: 'red',
            borderColor: 'black',
          }],
          labels: this.marketDates
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
  }
  }


