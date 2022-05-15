import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'coins-list',
    loadChildren: () => import('src/app/pages/coins-list/coins-list.module').then(m => m.CoinsListModule)
  },
  {
    path: 'coin-detail/:id',
    loadChildren: () => import('src/app/pages/coin-detail/coin-detail.module').then(m => m.CoinDetailModule)

  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
