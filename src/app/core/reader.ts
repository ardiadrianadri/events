import { InjectionToken } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Event } from './event';

export abstract class Reader {

  private _read: Subject<Event> = new Subject<Event>();

  protected get read(): Subject<Event> {
    return this._read;
  }

  public get event(): Observable<Event> {
    return this._read.asObservable();
  }
}

export const READERS: InjectionToken<Reader[]> = new InjectionToken<Reader[]>('READERS');
