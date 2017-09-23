import { Component } from '@angular/core';

import { ManagerService } from './core/manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor( private _manager: ManagerService) {
    this._manager.start();
  }
}
