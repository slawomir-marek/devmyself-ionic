import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@devmyself/shared';

import { ProductsGridComponent, ProductsSliderComponent } from './components';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ProductsGridComponent, ProductsSliderComponent],
  exports: [ProductsGridComponent, ProductsSliderComponent],
  providers: [],
})
export class InventoryModule {}
