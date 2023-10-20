import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@devmyself/shared';

import { InventoryModule } from '../inventory';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, HomePageRoutingModule, InventoryModule],
  declarations: [HomePage],
})
export class HomePageModule {}
