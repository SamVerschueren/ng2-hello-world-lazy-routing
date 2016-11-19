import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent }   from './contact.component';

import { routing } from './routing';

@NgModule({
	imports: [
		CommonModule,
		routing
	],
	declarations: [
		ContactComponent
	]
})
export class ContactModule { }
