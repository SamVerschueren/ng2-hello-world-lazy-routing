import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<my-header></my-header>

		<section>
			<router-outlet></router-outlet>
		</section>

		<my-footer name="Sam Verschueren"></my-footer>
	`,
	styles: [`
		section {
			padding: 10px;
		}
	`]
})
export class AppComponent { }
