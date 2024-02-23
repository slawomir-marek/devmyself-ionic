import { NgModule } from '@angular/core';
import { SharedModule } from '@devmyself/shared/shared.module';

import { ProductsSliderComponent } from './products-slider/products-slider.component';

@NgModule({
  declarations: [ProductsSliderComponent],
  imports: [SharedModule],
  exports: [ProductsSliderComponent],
})
export class InventoryUIModule {}
