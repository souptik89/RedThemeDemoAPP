import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MarketerLoginPage } from '../marketer-login/marketer-login';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advertiser-registration',
  templateUrl: 'advertiser-registration.html',
})
export class AdvertiserRegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvertiserRegistrationPage');
  }
  searchinfluencer() {
    this.navCtrl.setRoot(HomePage);
  }
  marketerlogin() {
    this.navCtrl.setRoot(MarketerLoginPage);
  }
}
