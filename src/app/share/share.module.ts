import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdButtonModule } from '@angular/material';
import { ClickEventDirective } from './click-event.directive';

@NgModule({
    imports: [
        CommonModule,
        MdButtonModule
    ],
    declarations: [
        ClickEventDirective
    ],
    exports: [
        CommonModule,
        MdButtonModule,
        ClickEventDirective
    ]
})
export class ShareModule {}
