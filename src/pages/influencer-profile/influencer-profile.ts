import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfluencerProfileEditPage } from '../influencer-profile-edit/influencer-profile-edit';
import { AvdertiserChangePasswordPage } from '../avdertiser-change-password/avdertiser-change-password';
/**
 * Generated class for the InfluencerProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-influencer-profile',
  templateUrl: 'influencer-profile.html',
})
export class InfluencerProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfluencerProfilePage');
  }
  influencerEditProfile() {
    this.navCtrl.push(InfluencerProfileEditPage);
  }
  influencerPasswordChange() {
    this.navCtrl.push(AvdertiserChangePasswordPage);
  }
}
