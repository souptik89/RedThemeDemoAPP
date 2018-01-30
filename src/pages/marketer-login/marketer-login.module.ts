import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarketerLoginPage } from './marketer-login';

@NgModule({
  declarations: [
    MarketerLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(MarketerLoginPage),
  ],
})
export class MarketerLoginPageModule {}
