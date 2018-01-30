import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfluencerProfilePage } from '../influencer-profile/influencer-profile';
/**
 * Generated class for the InfluencerProfileEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-influencer-profile-edit',
  templateUrl: 'influencer-profile-edit.html',
})
export class InfluencerProfileEditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfluencerProfileEditPage');
  }
  backtoprofile() {
    this.navCtrl.setRoot(InfluencerProfilePage);
  }
}
