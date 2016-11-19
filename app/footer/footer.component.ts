import { Component, Input } from '@angular/core';

@Component({
	selector: 'my-footer',
	template: `<footer>&copy; {{name}}</footer>`,
	styles: [`
		footer {
			display: block;
			position: absolute;
			bottom: 0;
			line-height: 30px;
			margin: 0px 10px;
		}
	`]
})
export class FooterComponent {
	@Input() name: string;
}
