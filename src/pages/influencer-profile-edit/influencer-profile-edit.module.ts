import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfluencerProfileEditPage } from './influencer-profile-edit';

@NgModule({
  declarations: [
    InfluencerProfileEditPage,
  ],
  imports: [
    IonicPageModule.forChild(InfluencerProfileEditPage),
  ],
})
export class InfluencerProfileEditPageModule {}
