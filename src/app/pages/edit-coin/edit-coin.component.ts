import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IWatchLlist } from 'src/app/core/services/models/watchList.models';
import { WatchListService } from 'src/app/core/services/watchList/watch-list.service';

@Component({
  selector: 'app-edit-coin',
  templateUrl: './edit-coin.component.html',
  styleUrls: ['./edit-coin.component.scss']
})
export class EditCoinComponent implements OnInit {

  // public coin?: IWatchLlist
  public coin?: IWatchLlist;

  constructor(
    private activatedRoute: ActivatedRoute,
    private watchListService: WatchListService
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.pipe(
    //   switchMap((params) =>{
    //     const coinId = params['coinId'];
    //     return this.coin = this.watchListService.getWatchCoinById(coinId)
    //   })
    // )
    this.activatedRoute.params.subscribe((params)=>{
      const coinId = params['coinId'];
      console.log(coinId)
      this.watchListService.getWatchCoinById(coinId).subscribe((coin)=>{
        console.log(coin)
        this.coin = coin
      })
    })
  }

}
