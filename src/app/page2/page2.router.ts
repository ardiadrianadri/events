import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Page2Component } from './page2.component';

export const routes: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: Page2Component }
]);
