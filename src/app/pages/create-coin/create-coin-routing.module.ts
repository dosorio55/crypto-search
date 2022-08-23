import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCoinComponent } from './create-coin.component';

const routes: Routes = [{
  path: '',
  component: CreateCoinComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCoinRoutingModule { }
