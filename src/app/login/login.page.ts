import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  signInForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    // private accountService: AccountService,
    private alertController: AlertController,  
    private router: Router,
    private navCtrl: NavController

  ) {this.signInForm = this.formBuilder.group({
    userId: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
}

  ngOnInit() {
  }


}
