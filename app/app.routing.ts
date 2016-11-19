import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{ path: 'contact', loadChildren: 'app/+contact/contact.module#ContactModule' }
];

export const routing = RouterModule.forRoot(routes);
