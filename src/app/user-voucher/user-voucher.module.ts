import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserVoucherPageRoutingModule } from './user-voucher-routing.module';

import { UserVoucherPage } from './user-voucher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserVoucherPageRoutingModule
  ],
  declarations: [UserVoucherPage]
})
export class UserVoucherPageModule {}
