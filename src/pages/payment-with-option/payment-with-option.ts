import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardpayPage } from '../cardpay/cardpay';
/**
 * Generated class for the PaymentWithOptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-with-option',
  templateUrl: 'payment-with-option.html',
})
export class PaymentWithOptionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  items = [{
    title: 'tewst',
    headimageUrl: 'assets/img/payment-logo_1.png'
  }
  ];


  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentWithOptionPage');
  }



  cardpay() {
    this.navCtrl.setRoot(CardpayPage);
  }
}





