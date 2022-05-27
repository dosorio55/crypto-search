import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCoinRoutingModule } from './create-coin-routing.module';
import { CreateCoinComponent } from './create-coin.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CreateCoinComponent
  ],
  imports: [
    CommonModule,
    CreateCoinRoutingModule,
    SharedModule
  ]
})
export class CreateCoinModule { }
