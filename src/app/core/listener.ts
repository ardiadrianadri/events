import { InjectionToken } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';

import { Event } from './event';

export abstract class Listener {

  private _listen: Subject<Event> = new Subject<Event>();

  public get listen(): Subject<Event> {
    return this._listen;
  }

  public event: Observable<Event>;

  constructor( type: string ) {
    this.event = this._listen.asObservable().filter((event: Event) => event.type === type );
  }
}

export const LISTENERS: InjectionToken<Listener[]> = new InjectionToken<Listener[]>('LISTENERS');
