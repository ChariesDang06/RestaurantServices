import { Component } from '@angular/core';
import {register} from 'swiper/element/bundle'
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    register();
    
  }

}
