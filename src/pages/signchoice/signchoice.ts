import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InfluencerLoginPage } from '../influencer-login/influencer-login';
import { MarketerLoginPage } from '../marketer-login/marketer-login';
import { AdvertiserRegistrationPage } from '../advertiser-registration/advertiser-registration';

@IonicPage()
@Component({
  selector: 'page-signchoice',
  templateUrl: 'signchoice.html',
})
export class SignchoicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignchoicePage');
  }
  marketer() {
    this.navCtrl.setRoot(AdvertiserRegistrationPage);
  }
  influencer() {
    this.navCtrl.setRoot(InfluencerLoginPage);
  }

  loginchoice() {
    let alert = this.alertCtrl.create({
      cssClass: 'radioalertDesign',

      enableBackdropDismiss: false,
    });
    alert.setTitle('Log In');
    alert.addInput({
      type: 'radio',
      label: 'Advertiser',
      value: 'adv'
    });

    alert.addInput({
      type: 'radio',
      label: 'influencer',
      value: 'inf'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.navCtrl.setRoot(InfluencerLoginPage);

      }
    });
    alert.present();
  }
}
