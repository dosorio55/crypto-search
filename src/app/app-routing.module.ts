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
    path: 'contact-us',
    loadChildren: () => import('src/app/pages/contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: 'user-watchlist',
    loadChildren: () => import('src/app/pages/user-watch-list/user-watch-list.module').then(m => m.UserWatchListModule)

  },
  {
    path: 'create-coin',
    loadChildren: () => import('src/app/pages/create-coin/create-coin.module').then(m => m.CreateCoinModule)

  },
  {
    path: 'edit-coin/:coinId',
    loadChildren: () => import('src/app/pages/edit-coin/edit-coin.module').then(m => m.EditCoinModule)

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
