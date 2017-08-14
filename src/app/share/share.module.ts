import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdButtonModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MdButtonModule
    ],
    exports: [
        CommonModule,
        MdButtonModule
    ]
})
export class ShareModule {}
