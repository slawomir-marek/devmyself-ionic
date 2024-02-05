import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@devmyself/shared/shared.module';

import { ProductsGridComponent } from './products-grid/products-grid.component';
import { ProductsSearchComponent } from './products-search.component';
import { PRODUCTS_SEARCH_ROUTES } from './products-search.routes';
import { SearchFiltersComponent } from './search-filters/search-filters.component';

@NgModule({
  declarations: [ProductsSearchComponent, ProductsGridComponent, SearchFiltersComponent],
  imports: [SharedModule, RouterModule.forChild(PRODUCTS_SEARCH_ROUTES)],
  exports: [ProductsSearchComponent],
})
export class InventoryFeatureSearchModule {}
