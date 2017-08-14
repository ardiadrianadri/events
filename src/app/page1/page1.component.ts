import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'my-page-one',
    templateUrl: './page1.component.html'
})
export class Page1Component {
    buttonClicked(title: string) {
        console.log(`Button ${title} clicked`);
    }
}
