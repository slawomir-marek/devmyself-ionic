import { NgModule } from '@angular/core';
import { InventoryUIModule } from '@devmyself/inventory/ui-common';
import { SharedModule } from '@devmyself/shared/shared.module';

import { ProductsRecomendedComponent } from './products-recommended.component';

@NgModule({
  declarations: [ProductsRecomendedComponent],
  imports: [InventoryUIModule, SharedModule],
  exports: [ProductsRecomendedComponent],
})
export class InventoryFeatureRecommendsModule {}
