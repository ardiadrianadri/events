import { NgModule, SkipSelf, Optional } from '@angular/core';

import { ManagerService } from './manager.service';

import { READERS } from './reader';
import { ClickReaderService } from './click-reader.service';
import { NavigationReaderService } from './navigation-reader.service';

import { LISTENERS } from './listener';
import { ClickListenerService } from './click-listener.service';
import { NavigationListener } from './navigation-listener.service';

@NgModule({
    providers: [
        ManagerService,
        ClickReaderService,
        { provide: READERS, useExisting: ClickReaderService, multi: true },
        { provide: READERS, useClass: NavigationReaderService, multi: true},
        { provide: LISTENERS, useClass: ClickListenerService, multi: true},
        { provide: LISTENERS, useClass: NavigationListener, multi: true}
    ]
})
export class CoreModule {
    constructor ( @SkipSelf() @Optional() parent: CoreModule) {
        if (parent) {
            throw new Error ('Hey !!! the core mocule can only be inyected once');
        }
    }
}