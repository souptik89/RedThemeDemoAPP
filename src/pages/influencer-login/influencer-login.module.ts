import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfluencerLoginPage } from './influencer-login';

@NgModule({
  declarations: [
    InfluencerLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(InfluencerLoginPage),
  ],
})
export class InfluencerLoginPageModule {}
