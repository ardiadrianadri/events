import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from '../share/share.module';
import { routes } from './page1.router';
import { Page1Component } from './page1.component';

@NgModule({
    imports: [
        routes,
        ShareModule
    ],
    declarations: [
        Page1Component
    ]
})
export class Page1Module {}
