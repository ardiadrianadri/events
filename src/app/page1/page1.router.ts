import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Page1Component } from './page1.component';

export const routes: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: Page1Component }
]);
