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
  public coinChart: any;
  public CoinId: string = "";

  public marketDates: string[] = [];
  public marketPrices: string[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private coinService: CoinsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.CoinId = params['id'];
      this.currentCoin$ = this.coinService.getCoinById(this.CoinId);
      this.coinService.getMarketRange(this.CoinId, this.daysRange).subscribe((coinMarketRange) => {
        coinMarketRange.prices.map(data => {
          let unixToDate = new Date(data[0])
          this.marketDates.push(`${unixToDate.getHours()}:${unixToDate.getMinutes()}/${unixToDate.getDate()}`)
          let priceToFixed = data[1].toFixed(2)
          this.marketPrices.push(priceToFixed)
        })
        //Draw Chart
        this.coinChart = new Chart("myChart", {
          type: 'bar',
          data: {
            datasets: [{
              label: this.CoinId.toUpperCase(),
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

  public changeDaysRange(days: number) {
    !this.coinChart || this.coinChart.destroy();

    this.marketDates = []
    this.marketPrices = []
    this.daysRange = days
    this.coinService.getMarketRange(this.CoinId, this.daysRange).subscribe((coinMarketRange) => {
      coinMarketRange.prices.map(data => {
        let unixToDate = new Date(data[0])
        
        if(this.daysRange > 1){
          this.marketDates.push(`${unixToDate.getDate()}/${unixToDate.getMonth()}/${unixToDate.getFullYear()}`)
        }else{
          this.marketDates.push(`${unixToDate.getHours()}:${unixToDate.getMinutes()}/${unixToDate.getDate()}`)
        }

        let priceToFixed = data[1].toFixed(2)
        this.marketPrices.push(priceToFixed)
      })
      //Draw Chart
      this.coinChart = new Chart("myChart", {
        type: 'bar',
        data: {
          datasets: [{
            label: this.CoinId.toLocaleUpperCase(),
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


