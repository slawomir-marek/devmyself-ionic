import { NgModule } from '@angular/core';
import { SharedModule } from '@devmyself/shared/shared.module';

import { ProductsGridComponent } from './products-grid/products-grid.component';
import { ProductsSliderComponent } from './products-slider/products-slider.component';

@NgModule({
  declarations: [ProductsSliderComponent, ProductsGridComponent],
  imports: [SharedModule],
  exports: [ProductsSliderComponent, ProductsGridComponent],
})
export class InventoryFeatureProductsModule {}
