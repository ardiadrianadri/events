import { Injectable } from '@angular/core';

import { Event } from './event';
import { Listener } from './listener';

@Injectable()
export class ClickListenerService extends Listener {

    constructor() {
        super('CLICK');

        this.event.subscribe(
            (event: Event) => {
                event.action();
            }
        )
    }
}