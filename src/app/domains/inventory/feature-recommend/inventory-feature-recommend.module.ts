import { NgModule } from '@angular/core';
import { SharedModule } from '@devmyself/shared/shared.module';

import { ProductsRecomendedComponent } from './products-recommended.component';
import { ProductsSliderComponent } from './products-slider/products-slider.component';

@NgModule({
  declarations: [ProductsSliderComponent, ProductsRecomendedComponent],
  imports: [SharedModule],
  exports: [ProductsSliderComponent, ProductsRecomendedComponent],
})
export class InventoryFeatureRecommendsModule {}
