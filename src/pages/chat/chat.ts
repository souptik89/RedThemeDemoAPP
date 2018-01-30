import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { CardpayPage } from '../cardpay/cardpay';
import { PaymentPage } from '../payment/payment';
import {
  Direction,
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent
} from 'ionic-swing';


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  val: any;
  camicon: boolean = true;
  attch: boolean = false;
  cambutton: boolean = false;
  recoder_box_show: boolean = false;
  slide: boolean = false;
  active: boolean;
  btn_active: boolean
  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  stackConfig: StackConfig;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.active = false;
    this.stackConfig = {
      throwOutConfidence: (offset, element: any) => {
        return Math.min(Math.abs(offset) / (element.offsetWidth / 2), 0);
      },
      transform: (element, x, y, r) => {
        this.stopdrag(element, x, y, r);
        this.active = true;
      },
      throwOutDistance: (d) => {
        return 1;
      }
    };


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chat');
  }


  showattch() {
    if (this.attch == false) {
      this.attch = true;
    }
    else {
      this.attch = false;
    }
  }
  hidecam(e) {
    if (this.val == '') {
      this.camicon = true;
      this.cambutton = false;
    } else {
      this.camicon = false;
      this.cambutton = true;
    }
  }


  recording() {

    this.btn_active = true;
    this.slide = !this.slide;
  }
  recordfinish() {
    this.active = true;
    this.btn_active = false;
  }
  ngAfterViewInit() {
    // ViewChild & ViewChildren are only available
    // in this function

    // console.log(this.swingStack); // this is the stack
    //console.log(this.swingCards); // this is a list of cards

    // we can get the underlying stack
    // which has methods - createCard, destroyCard, getCard etc
    //console.log(this.swingStack.stack);

    // and the cards
    // every card has methods - destroy, throwIn, throwOut etc
    //this.swingCards.forEach((c) => console.log(c.getCard()));


    // this.swingStack.throwin.subscribe((event: ThrowEvent) => console.log('Manual hook: ', event));

    // this.swingStack.dragstart.subscribe((event: DragEvent) => console.log(event));

    // this.swingStack.dragmove.subscribe((event: DragEvent) => console.log(event));
    //this.swingStack.dragend.subscribe((event: DragEvent) => {
    //  this.btn_active = false;
    //  });
  }
  stopdrag(element, x, y, r) {

    if (x > 0) {
      x = 0;
      y = 0;
    }
    else if (x < 0) {
      x = x;
      y = 0;
    }
    else if (y < 0) {
      x = x;
      y = 0;
    }
    else if (y > 0) {
      x = x;
      y = 0;
    }
    else {
      x = x;
      y = y;
    }
    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;

  }
  onItemMove(element, x, y, r) { }
  onThrowOut(event: ThrowEvent) {
    console.log('Hook from the template', event.throwDirection);
  }
  gotopaycard() {
    this.navCtrl.push(PaymentPage);
  }
}
