import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvertiserRegistrationPage } from './advertiser-registration';
                                              

@NgModule({
  declarations: [
    AdvertiserRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvertiserRegistrationPage),
  ],
})
export class AdvertiserRegistrationPageModule {}
