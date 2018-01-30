import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentWithOptionPage } from './payment-with-option';

@NgModule({
  declarations: [
    PaymentWithOptionPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentWithOptionPage),
  ],
})
export class PaymentWithOptionPageModule {}
