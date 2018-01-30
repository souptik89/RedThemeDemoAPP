import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfluencerProfilePage } from './influencer-profile';

@NgModule({
  declarations: [
    InfluencerProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(InfluencerProfilePage),
  ],
})
export class InfluencerProfilePageModule {}
