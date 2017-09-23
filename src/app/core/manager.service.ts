import { Injectable, Inject } from '@angular/core';

import { Event } from './event';
import { READERS, Reader } from './reader';
import { LISTENERS, Listener } from './listener';

@Injectable()
export class ManagerService {
    constructor (
        @Inject(READERS) private _readers: Reader[],
        @Inject(LISTENERS) private _listeners: Listener[]
    ) {}

    start () {
        this._readers.forEach( reader => {
            reader.event.subscribe(
                (event: Event) => {
                    this._listeners.forEach( listener => {
                        listener.listen.next(event);
                    });
                }
            )
        });
    }
}