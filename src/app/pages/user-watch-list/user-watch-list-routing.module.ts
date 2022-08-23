import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserWatchListComponent } from './user-watch-list.component';

const routes: Routes = [{ 
  path: '',
  component: UserWatchListComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserWatchListRoutingModule { }
