import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromotListPage } from './promot-list';

@NgModule({
  declarations: [
    PromotListPage,
  ],
  imports: [
    IonicPageModule.forChild(PromotListPage),
  ],
})
export class PromotListPageModule {}
