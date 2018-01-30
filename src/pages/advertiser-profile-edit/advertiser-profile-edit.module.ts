import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvertiserProfileEditPage } from './advertiser-profile-edit';

@NgModule({
  declarations: [
    AdvertiserProfileEditPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvertiserProfileEditPage),
  ],
})
export class AdvertiserProfileEditPageModule {}
