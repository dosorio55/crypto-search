import { Component, OnInit } from '@angular/core';
import { WatchListService } from 'src/app/core/services/watchList/watch-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private watchListService: WatchListService) { }

  ngOnInit(): void {
  }
  

}
