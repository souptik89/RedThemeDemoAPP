import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentWithOptionPage } from '../payment-with-option/payment-with-option';
import { CardpayPage } from '../cardpay/cardpay';
/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
showoptions:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.showoptions=false;
  }

  items = [{
    title: 'tewst',
    headimageUrl: 'assets/img/payment-logo_1.png'
  },{
    title: 'tewst',
    headimageUrl: 'assets/img/payment-logo_1.png'
  },{
    title: 'tewst',
    headimageUrl: 'assets/img/payment-logo_1.png'
  },{
    title: 'tewst',
    headimageUrl: 'assets/img/payment-logo_1.png'
  }
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
  options() {
    this.showoptions=true;
  }
  
  cardpay() {
    this.navCtrl.push(CardpayPage);
  }
}
