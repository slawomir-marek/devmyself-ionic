import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@devmyself/shared';

import { ProductsListComponent } from './components';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ProductsListComponent],
  exports: [ProductsListComponent],
  providers: [],
})
export class InventoryModule {}
