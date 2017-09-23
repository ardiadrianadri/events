import { Injectable } from '@angular/core';

import { Listener } from './listener';
import { Event } from './event';

@Injectable()
export class NavigationListener extends Listener {

    constructor() {
        super('NAVIGATION');

        this.event.subscribe(
            (event: Event) => { console.log(event.action); }
        )
    }
}