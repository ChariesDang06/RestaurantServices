import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderBillDetailsPageRoutingModule } from './order-bill-details-routing.module';

import { OrderBillDetailsPage } from './order-bill-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderBillDetailsPageRoutingModule
  ],
  declarations: [OrderBillDetailsPage]
})
export class OrderBillDetailsPageModule {}
