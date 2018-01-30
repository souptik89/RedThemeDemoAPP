import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PromotListPage } from '../promot-list/promot-list';

@IonicPage()
@Component({
  selector: 'page-influencer-login',
  templateUrl: 'influencer-login.html',
})
export class InfluencerLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfluencerLoginPage');
  }
  promotedList() {
    this.navCtrl.setRoot(PromotListPage);
  }
}
