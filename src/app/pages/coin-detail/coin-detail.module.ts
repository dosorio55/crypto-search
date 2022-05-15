import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinDetailRoutingModule } from './coin-detail-routing.module';
import { CoinDetailComponent } from './coin-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CoinDetailComponent
  ],
  imports: [
    CommonModule,
    CoinDetailRoutingModule
  ]
})
export class CoinDetailModule { }
