import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvertiserProfilePage } from './advertiser-profile';

@NgModule({
  declarations: [
    AdvertiserProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(AdvertiserProfilePage),
  ],
})
export class AdvertiserProfilePageModule {}
