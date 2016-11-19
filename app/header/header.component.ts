import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'my-header',
	template: `
		<nav>
			<a [routerLink]="['']" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
			<a [routerLink]="['contact']" routerLinkActive="active">Contact</a>
		</nav>
	`,
	styles: [`
		nav {
			background-color: #eee;
			border-bottom: 1px solid gray;
		}

		nav > a {
			padding: 0px 10px;
			line-height: 30px;
			display: inline-block;
			text-decoration: none;
			color: black;
		}

		nav > a.active {
			background-color: white;
			color: navy;
		}
	`]
})
export class HeaderComponent { }
