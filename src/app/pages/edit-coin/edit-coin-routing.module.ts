import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCoinComponent } from './edit-coin.component';

const routes: Routes = [{
  path: '',
  component: EditCoinComponent

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCoinRoutingModule { }
