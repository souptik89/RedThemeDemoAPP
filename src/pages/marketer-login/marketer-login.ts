import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AdvertiserForgotPasswordPage } from '../advertiser-forgot-password/advertiser-forgot-password';

/**
 * Generated class for the MarketerLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marketer-login',
  templateUrl: 'marketer-login.html',
})
export class MarketerLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketerLoginPage');
  }
  forgotpassword() {
    this.navCtrl.push(AdvertiserForgotPasswordPage);
  }
  searchinfluencer() {
    this.navCtrl.setRoot(HomePage);
  }
}
