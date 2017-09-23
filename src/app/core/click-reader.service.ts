import { Injectable } from '@angular/core';

import { Reader } from './reader';
import { Event } from './event';

@Injectable()
export class ClickReaderService extends Reader {

    doClick (fn: Function) {
        let auditEvent: Event = {
            type: 'CLICK',
            action: fn
        }

        this.read.next(auditEvent);
    }
}