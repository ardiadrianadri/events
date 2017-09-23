import { Directive, HostListener } from '@angular/core';

import { ClickReaderService } from '../core/click-reader.service';

@Directive({
    selector: '[audit-click]'
})
export class ClickEventDirective {

    constructor (private _reader: ClickReaderService) {}

    @HostListener('click', ['$event'])
    doClick(event){
        this._reader.doClick(
            () => { console.log(event); }
        )
    }
}