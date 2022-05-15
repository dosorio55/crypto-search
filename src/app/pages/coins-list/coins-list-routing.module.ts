import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinsListComponent } from './coins-list.component';

const routes: Routes = [{
  path: '',
  component: CoinsListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoinsListRoutingModule { }
