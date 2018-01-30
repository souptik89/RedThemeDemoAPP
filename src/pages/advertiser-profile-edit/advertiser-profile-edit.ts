import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdvertiserProfilePage } from '../advertiser-profile/advertiser-profile';
/**
 * Generated class for the AdvertiserProfileEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advertiser-profile-edit',
  templateUrl: 'advertiser-profile-edit.html',
})
export class AdvertiserProfileEditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvertiserProfileEditPage');
  }
  backtoprofile() {
    this.navCtrl.setRoot(AdvertiserProfilePage);
  }
}
