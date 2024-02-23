import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InventoryUIModule } from '@devmyself/inventory/ui-common';
import { SharedModule } from '@devmyself/shared/shared.module';

import { ProductComponent } from './product.component';
import { PRODUCT_ROUTES } from './product.routes';
import { ProductActionsComponent } from './product-actions/product-actions.component';
import { ProductShipmentComponent } from './product-shipment/product-shipment.component';

@NgModule({
  declarations: [ProductComponent, ProductActionsComponent, ProductShipmentComponent],
  imports: [InventoryUIModule, SharedModule, RouterModule.forChild(PRODUCT_ROUTES)],
  exports: [ProductComponent],
})
export class InventoryFeatureProductModule {}
