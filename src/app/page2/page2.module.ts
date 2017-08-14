import { NgModule } from '@angular/core';

import { ShareModule } from '../share/share.module';
import { routes } from './page2.router';
import { Page2Component } from './page2.component';

@NgModule({
    imports: [
        ShareModule,
        routes
    ],
    declarations: [
        Page2Component
    ]
})
export class Page2Module {}
