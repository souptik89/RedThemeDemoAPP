import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarketerLoginPage } from '../marketer-login/marketer-login';


@IonicPage()
@Component({
  selector: 'page-advertiser-forgot-password',
  templateUrl: 'advertiser-forgot-password.html',
})
export class AdvertiserForgotPasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvertiserForgotPasswordPage');
  }
  marketerLogin() {
    this.navCtrl.setRoot(MarketerLoginPage);
  }
}
