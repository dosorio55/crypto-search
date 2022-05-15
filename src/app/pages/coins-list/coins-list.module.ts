import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinsListRoutingModule } from './coins-list-routing.module';
import { CoinsListComponent } from './coins-list.component';
import { CoinComponent } from './components/coin/coin.component';


@NgModule({
  declarations: [
    CoinsListComponent,
    CoinComponent
  ],
  imports: [
    CommonModule,
    CoinsListRoutingModule
  ]
})
export class CoinsListModule { }
