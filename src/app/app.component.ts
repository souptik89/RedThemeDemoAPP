import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SignchoicePage } from '../pages/signchoice/signchoice';
import { HomePage } from '../pages/home/home';

import { InfluencerLoginPage } from '../pages/influencer-login/influencer-login';
import { MarketerLoginPage } from '../pages/marketer-login/marketer-login';
import { AdvertiserEscrowedPage } from '../pages/advertiser-escrowed/advertiser-escrowed';
import { AdvertiserRegistrationPage } from '../pages/advertiser-registration/advertiser-registration';
import { AdvertiserTransactionHistoryPage } from '../pages/advertiser-transaction-history/advertiser-transaction-history';
import { AdvertiserForgotPasswordPage } from '../pages/advertiser-forgot-password/advertiser-forgot-password';
import { AdvertiserEscrowedAccountPage } from '../pages/advertiser-escrowed-account/advertiser-escrowed-account';
import { AvdertiserChangePasswordPage } from '../pages/avdertiser-change-password/avdertiser-change-password';
import { MessageListPage } from '../pages/message-list/message-list';
import { ChatPage } from '../pages/chat/chat';
import { PaymentPage } from '../pages/payment/payment';
import { PromotListPage } from '../pages/promot-list/promot-list';
import { PaymentWithOptionPage } from '../pages/payment-with-option/payment-with-option';
import { CardpayPage } from '../pages/cardpay/cardpay';
import { ReviewPage } from '../pages/review/review';
import { AdvertiserProfilePage } from '../pages/advertiser-profile/advertiser-profile';
import { AdvertiserProfileEditPage } from '../pages/advertiser-profile-edit/advertiser-profile-edit';
import { InfluencerProfilePage } from '../pages/influencer-profile/influencer-profile';
import { InfluencerProfileEditPage } from '../pages/influencer-profile-edit/influencer-profile-edit';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SignchoicePage;

  pages: Array<{ title: string, component: any }>;
  active: boolean = false;
  influencer: Array<{ title: string, component: any }>;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Search influencers', component: HomePage },
      { title: 'Promoted products', component: PromotListPage },
      { title: 'transaction history', component: AdvertiserTransactionHistoryPage },
      { title: 'card details', component: CardpayPage },
      { title: 'escrowed account', component: AdvertiserEscrowedAccountPage },
      { title: 'logout', component: SignchoicePage },
    ];
    this.influencer = [
      // { title: 'Profile', component: InfluencerProfilePage },
      { title: 'My Promoted products', component: PromotListPage },
      // { title: 'transaction history', component: AdvertiserTransactionHistoryPage },
      //  { title: 'card details', component: CardpayPage },
      { title: 'escrowed account', component: AdvertiserEscrowedPage },
      { title: 'logout', component: SignchoicePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.active = true;
  }
  marketerProfileEdit() {
    // this.nav.setRoot(AdvertiserProfilePage);
    this.nav.setRoot(InfluencerProfilePage);
  }
  message() {
    this.nav.setRoot(MessageListPage);
  }
}
