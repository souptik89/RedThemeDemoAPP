import { Directive, HostListener, ElementRef } from '@angular/core';


@Directive({
  selector: 'ion-textarea[autoresize]' // Attribute selector
})
export class TextgrowDirective {
  @HostListener("input", ["$event.target"])
	onInput(textArea: HTMLTextAreaElement): void {
		this.adjust();
	}
  constructor(public element: ElementRef) {
    console.log('Hello TextgrowDirective Directive');
  }
  ngOnInit(): void {
		this.adjust();
	}
	adjust(): void {
    var ta = this.element.nativeElement.querySelector("textarea");
    if (ta) {
      ta.style.overflow = "hidden";
      ta.style.height = "auto";
      ta.style.height = ta.scrollHeight + "px";
    }
	
	}
}
