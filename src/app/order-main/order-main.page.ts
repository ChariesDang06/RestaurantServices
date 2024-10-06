import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-order-main',
  templateUrl: './order-main.page.html',
  styleUrls: ['./order-main.page.scss'],
})
export class OrderMainPage implements OnInit {
  isMobile: boolean;
  links: string[] = [
    'Khai vị',
    'Món chính',
    'Món nước',
    'Món nướng',
    'Nước uống',
    'Món ăn kèm',
  ];
  constructor(private platform: Platform) {
    this.isMobile = this.platform.is('mobile'); // Check if the platform is mobile
  }

  ngOnInit() {}
}
