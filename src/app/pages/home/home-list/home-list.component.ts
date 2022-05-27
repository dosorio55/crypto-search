import { Component, Input, OnInit } from '@angular/core';
import { ICoins } from 'src/app/core/services/models/product.models';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {

  @Input() public homeCoin?: ICoins 

  constructor() { }

  ngOnInit(): void {
  }

}
