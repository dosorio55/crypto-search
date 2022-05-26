import { Component, OnInit } from '@angular/core';
import { WatchListService } from 'src/app/core/services/watchList/watch-list.service';

@Component({
  selector: 'app-user-watch-list',
  templateUrl: './user-watch-list.component.html',
  styleUrls: ['./user-watch-list.component.scss']
})
export class UserWatchListComponent implements OnInit {

  

  constructor(private watchListService: WatchListService) { }

  ngOnInit(): void {
    this.watchListService.getWatchProducts().subscribe((Wcoins =>{
      console.log(Wcoins)
    }))
  }

}
