import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  showFilter: boolean;
  showSearch: boolean;
  constructor(public navCtrl: NavController) {
    this.showFilter = false;
    this.showSearch = true;
  }
  openfilter() {

    this.showFilter = true;

  }
  opensearch() {
    this.showFilter = false;
  }
  gotochat() {
    this.navCtrl.push(ChatPage);
  }
}
