import { Routes } from '@angular/router';

import { ProductsSearchComponent } from './products-search.component';

export const PRODUCTS_SEARCH_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsSearchComponent,
  },
];
