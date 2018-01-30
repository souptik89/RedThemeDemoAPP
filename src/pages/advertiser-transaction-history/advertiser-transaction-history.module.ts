import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvertiserTransactionHistoryPage } from './advertiser-transaction-history';

@NgModule({
  declarations: [
    AdvertiserTransactionHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvertiserTransactionHistoryPage),
  ],
})
export class AdvertiserTransactionHistoryPageModule {}
