import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserWatchListRoutingModule } from './user-watch-list-routing.module';
import { UserCoinsComponent } from './components/user-coins/user-coins.component';
import { UserWatchListComponent } from './user-watch-list.component';


@NgModule({
  declarations: [
    UserWatchListComponent,
    UserCoinsComponent
  ],
  imports: [
    CommonModule,
    UserWatchListRoutingModule,
  ]
})
export class UserWatchListModule { }
