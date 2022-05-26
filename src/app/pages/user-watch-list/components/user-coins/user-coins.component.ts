import { Component, Input, OnInit } from '@angular/core';
import { IWatchLlist } from 'src/app/core/services/models/watchList.models';

@Component({
  selector: 'app-user-coins',
  templateUrl: './user-coins.component.html',
  styleUrls: ['./user-coins.component.scss']
})
export class UserCoinsComponent implements OnInit {

  @Input() public watchedCoin?: IWatchLlist

  constructor() { }

  ngOnInit(): void {
  }

}
