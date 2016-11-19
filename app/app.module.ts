import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		routing
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent
	],
	providers: [
		{ provide: APP_BASE_HREF, useValue: '/' }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
