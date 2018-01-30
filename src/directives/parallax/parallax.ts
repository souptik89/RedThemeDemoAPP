import { Directive, ElementRef, Renderer, ChangeDetectorRef } from '@angular/core';

@Directive({
  selector: '[parallax]',
  host: {
    '(ionScroll)': 'onContentScroll($event)',
    '(window:resize)': 'onWindowResize($event)'
  } // Attribute selector
})
export class ParallaxDirective {
  header: any;
  headerHeight: any;
  translateAmt: any;
  scaleAmt: any;


  constructor(public element: ElementRef, public renderer: Renderer, public ref: ChangeDetectorRef) {
    console.log('Hello ParallaxDirective Directive');
  }

  ngOnInit() {

    let content = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
    this.header = content.getElementsByClassName('big')[0];
    let mainContent = content.getElementsByClassName('body')[0];

    this.headerHeight = this.header.clientHeight;

    this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
    this.renderer.setElementStyle(this.header, 'background-size', 'cover');
    this.renderer.setElementStyle(mainContent, 'position', 'absolute');

  }

  onWindowResize(ev) {
    this.headerHeight = this.header.clientHeight;
    console.log('heade', this.headerHeight);
  }

  onContentScroll(ev) {

    ev.domWrite(() => {
      this.updateParallaxHeader(ev);
    });

  }
  updateParallaxHeader(ev) {

    if (ev.scrollTop >= 0) {
      this.translateAmt = ev.scrollTop / 2;
      this.scaleAmt = 1;
      console.log(ev.scrollTop);
    } else {
      this.translateAmt = 0;
      this.scaleAmt = -ev.scrollTop / this.headerHeight + 1;
    }

    this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');

  }


}
