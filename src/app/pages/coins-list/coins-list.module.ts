import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinsListRoutingModule } from './coins-list-routing.module';
import { CoinsListComponent } from './coins-list.component';
import { CoinComponent } from './components/coin/coin.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CoinsListComponent,
    CoinComponent
  ],
  imports: [
    CommonModule,
    CoinsListRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class CoinsListModule { }
