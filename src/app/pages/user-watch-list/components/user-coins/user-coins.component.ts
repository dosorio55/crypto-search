import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IWatchLlist } from 'src/app/core/services/models/watchList.models';
import { WatchListService } from 'src/app/core/services/watchList/watch-list.service';

@Component({
  selector: 'app-user-coins',
  templateUrl: './user-coins.component.html',
  styleUrls: ['./user-coins.component.scss']
})
export class UserCoinsComponent implements OnInit {

  @Input() public watchedCoin?: IWatchLlist;
  @Output() public deleteCoin: EventEmitter<void> = new EventEmitter()

  constructor(
    private watchListService: WatchListService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public deleteWatchedCoin(idCoin: string) {
    console.log(idCoin)
    this.watchListService.deleteWCoin(idCoin).subscribe((coin) => {
      this.deleteCoin.emit()
      // console.log('eliminado', coin)
    })
      ;
  }
}
