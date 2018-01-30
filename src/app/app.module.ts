import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignchoicePage } from '../pages/signchoice/signchoice';
import { InfluencerLoginPage } from '../pages/influencer-login/influencer-login';
import { MarketerLoginPage } from '../pages/marketer-login/marketer-login';
import { AdvertiserForgotPasswordPage } from '../pages/advertiser-forgot-password/advertiser-forgot-password';
import { AdvertiserEscrowedPage } from '../pages/advertiser-escrowed/advertiser-escrowed';
import { AdvertiserEscrowedAccountPage } from '../pages/advertiser-escrowed-account/advertiser-escrowed-account';
import { MessageListPage } from '../pages/message-list/message-list';
import { PaymentPage } from '../pages/payment/payment';
import { PaymentWithOptionPage } from '../pages/payment-with-option/payment-with-option';
import { ChatPage } from '../pages/chat/chat';
import { AdvertiserTransactionHistoryPage } from '../pages/advertiser-transaction-history/advertiser-transaction-history';
import { CardpayPage } from '../pages/cardpay/cardpay';
import { ReviewPage } from '../pages/review/review';
import { PromotListPage } from '../pages/promot-list/promot-list';
import { AdvertiserProfilePage } from '../pages/advertiser-profile/advertiser-profile';
import { AvdertiserChangePasswordPage } from '../pages/avdertiser-change-password/avdertiser-change-password';
import { AdvertiserRegistrationPage } from '../pages/advertiser-registration/advertiser-registration';
import { AdvertiserProfileEditPage } from '../pages/advertiser-profile-edit/advertiser-profile-edit';
import { InfluencerProfilePage } from '../pages/influencer-profile/influencer-profile';
import { InfluencerProfileEditPage } from '../pages/influencer-profile-edit/influencer-profile-edit';


import { TextgrowDirective } from '../directives/textgrow/textgrow';
import { ParallaxDirective } from '../directives/parallax/parallax';
import { Ionic2RatingModule } from 'ionic2-rating';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicSwingModule } from 'ionic-swing';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdvertiserEscrowedPage,
    AdvertiserEscrowedAccountPage,
    AdvertiserForgotPasswordPage,
    AdvertiserRegistrationPage,
    SignchoicePage,
    MarketerLoginPage,
    AvdertiserChangePasswordPage,
    AdvertiserTransactionHistoryPage,
    InfluencerLoginPage,
    MessageListPage,
    ChatPage,
    PaymentPage,
    PaymentWithOptionPage,
    CardpayPage,
    ReviewPage,
    PromotListPage,
    AdvertiserProfilePage,
    AdvertiserProfileEditPage,
    InfluencerProfilePage,
    InfluencerProfileEditPage,
    TextgrowDirective,
    ParallaxDirective,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule, IonicSwingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdvertiserRegistrationPage,
    AdvertiserEscrowedPage,
    AdvertiserEscrowedAccountPage,
    AdvertiserForgotPasswordPage,
    SignchoicePage,
    MarketerLoginPage,
    AvdertiserChangePasswordPage,
    AdvertiserTransactionHistoryPage,
    InfluencerLoginPage,
    MessageListPage,
    ChatPage,
    PaymentPage,
    PaymentWithOptionPage,
    CardpayPage,
    ReviewPage,
    PromotListPage,
    AdvertiserProfilePage,
    AdvertiserProfileEditPage,
    InfluencerProfilePage,
    InfluencerProfileEditPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
