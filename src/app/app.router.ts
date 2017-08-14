import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes = RouterModule.forRoot([
    { path: '', redirectTo: 'page1', pathMatch: 'full' },
    { path: 'page1', loadChildren: './page1/page1.module#Page1Module'},
    { path: 'page2', loadChildren: './page2/page2.module#Page2Module'}
]);
