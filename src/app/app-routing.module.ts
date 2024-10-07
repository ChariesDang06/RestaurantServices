import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reservation',
    loadChildren: () => import('./reservation/reservation.module').then( m => m.ReservationPageModule)
  },
  {
    path: 'order-main',
    loadChildren: () => import('./order-main/order-main.module').then( m => m.OrderMainPageModule)
  },
  {
    path: 'order-dish-details',
    loadChildren: () => import('./order-dish-details/order-dish-details.module').then( m => m.OrderDishDetailsPageModule)
  },
  {
    path: 'order-bill-details',
    loadChildren: () => import('./order-bill-details/order-bill-details.module').then( m => m.OrderBillDetailsPageModule)
  },
  {
    path: 'order-payments',
    loadChildren: () => import('./order-payments/order-payments.module').then( m => m.OrderPaymentsPageModule)
  },
  {
    path: 'user-info-main',
    loadChildren: () => import('./user-info-main/user-info-main.module').then( m => m.UserInfoMainPageModule)
  },
  {
    path: 'user-info-editing',
    loadChildren: () => import('./user-info-editing/user-info-editing.module').then( m => m.UserInfoEditingPageModule)
  },
  {
    path: 'user-voucher',
    loadChildren: () => import('./user-voucher/user-voucher.module').then( m => m.UserVoucherPageModule)
  },
  {
    path: 'user-history',
    loadChildren: () => import('./user-history/user-history.module').then( m => m.UserHistoryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
