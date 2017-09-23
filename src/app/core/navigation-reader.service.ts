import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { Reader } from './reader';

@Injectable()
export class NavigationReaderService extends Reader {

    private _previusUrl = '';

    constructor( private _router: Router) {
        super();

        this._router.events
        .filter ((event: any) => event instanceof NavigationEnd )
        .subscribe (
            (event: NavigationEnd ) => {
                const auditEvent = {
                    type: 'NAVIGATION',
                    action: `from ${this._previusUrl} to ${event.url}`
                };

                this._previusUrl = event.url;

                this.read.next(auditEvent);
            }
        )
    }
}