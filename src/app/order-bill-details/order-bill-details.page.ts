import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-order-bill-details',
  templateUrl: './order-bill-details.page.html',
  styleUrls: ['./order-bill-details.page.scss'],
})
export class OrderBillDetailsPage implements OnInit {
  isMobile: boolean;

  constructor(private platform: Platform) {
    this.isMobile = this.platform.is('mobile'); // Check if the platform is mobile
  }

  ngOnInit() {}
}
