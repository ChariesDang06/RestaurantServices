import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ReservationPageRoutingModule } from './reservation-routing.module';

import { ReservationPage } from './reservation.page';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { BannerPromoComponent } from '../components/banner-promo/banner-promo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationPageRoutingModule,
    NavbarComponent,
    BannerPromoComponent,
  ],
  declarations: [ReservationPage],
})
export class ReservationPageModule {}
