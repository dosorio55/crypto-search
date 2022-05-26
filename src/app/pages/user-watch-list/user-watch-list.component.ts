import { Component, OnInit } from '@angular/core';
import { IWatchLlist } from 'src/app/core/services/models/watchList.models';
import { WatchListService } from 'src/app/core/services/watchList/watch-list.service';

@Component({
  selector: 'app-user-watch-list',
  templateUrl: './user-watch-list.component.html',
  styleUrls: ['./user-watch-list.component.scss']
})
export class UserWatchListComponent implements OnInit {

  public userCoins?: IWatchLlist[]

  constructor(private watchListService: WatchListService) { }

  ngOnInit(): void {
    this.watchListService.getWatchProducts().subscribe((watchedCoins =>{
      this.userCoins = watchedCoins;
      console.log(this.userCoins)
    }))
  }

}
