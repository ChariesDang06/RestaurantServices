import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderDishDetailsPageRoutingModule } from './order-dish-details-routing.module';

import { OrderDishDetailsPage } from './order-dish-details.page';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { NavBarModule } from '../components/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDishDetailsPageRoutingModule,
    NavBarModule ,
  ],
  declarations: [OrderDishDetailsPage],
  exports:[OrderDishDetailsPage]
})
export class OrderDishDetailsPageModule {}
