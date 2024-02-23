import { Routes } from '@angular/router';

import { ProductComponent } from './product.component';

export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductComponent,
  },
];
