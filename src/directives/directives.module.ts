import { NgModule } from '@angular/core';
import { TextgrowDirective } from './textgrow/textgrow';
import { ParallaxDirective } from './parallax/parallax';
@NgModule({
	declarations: [TextgrowDirective,
    ParallaxDirective],
	imports: [],
	exports: [TextgrowDirective,
    ParallaxDirective]
})
export class DirectivesModule {}
