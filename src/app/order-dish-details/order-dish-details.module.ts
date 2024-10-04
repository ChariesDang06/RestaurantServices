import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderDishDetailsPageRoutingModule } from './order-dish-details-routing.module';

import { OrderDishDetailsPage } from './order-dish-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDishDetailsPageRoutingModule
  ],
  declarations: [OrderDishDetailsPage]
})
export class OrderDishDetailsPageModule {}
