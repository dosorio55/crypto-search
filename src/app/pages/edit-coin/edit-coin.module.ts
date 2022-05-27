import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCoinRoutingModule } from './edit-coin-routing.module';
import { EditCoinComponent } from './edit-coin.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditCoinComponent
  ],
  imports: [
    CommonModule,
    EditCoinRoutingModule,
    SharedModule
  ]
})
export class EditCoinModule { }
