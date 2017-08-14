import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'my-page-two',
    templateUrl: './page2.component.html'
})
export class Page2Component {
    buttonClicked(title: string) {
        console.log(`Button ${title} clicked`);
    }
}
