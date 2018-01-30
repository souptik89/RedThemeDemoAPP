import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignchoicePage } from './signchoice';

@NgModule({
  declarations: [
    SignchoicePage,
  ],
  imports: [
    IonicPageModule.forChild(SignchoicePage),
  ],
})
export class SignchoicePageModule {}
