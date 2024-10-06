import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderMainPageRoutingModule } from './order-main-routing.module';

import { OrderMainPage } from './order-main.page';
import { NavbarComponent } from '../components/navbar/navbar.component';

import { NavBarModule } from '../components/navbar/navbar.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OrderMainPageRoutingModule, NavBarModule ],
  declarations: [OrderMainPage],
  exports:[OrderMainPage]
})
export class OrderMainPageModule {}
