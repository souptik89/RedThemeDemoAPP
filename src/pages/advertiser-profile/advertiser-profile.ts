import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdvertiserProfileEditPage } from '../advertiser-profile-edit/advertiser-profile-edit';
import { AvdertiserChangePasswordPage } from '../avdertiser-change-password/avdertiser-change-password';

/**
 * Generated class for the AdvertiserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advertiser-profile',
  templateUrl: 'advertiser-profile.html',
})
export class AdvertiserProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvertiserProfilePage');
  }
  marketerProfileEdit() {
    this.navCtrl.push(AdvertiserProfileEditPage);
  }
  marketerPasswordChange() {
    this.navCtrl.push(AvdertiserChangePasswordPage);
  }
}
