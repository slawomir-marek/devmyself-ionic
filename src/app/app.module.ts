import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { InventoryDataModule } from '@devmyself/inventory/data/inventory-data.module';
import { InventoryFeatureProductsModule } from '@devmyself/inventory/feature-products/inventory-feature-products.module';
import { SharedModule } from '@devmyself/shared/shared.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './shell';

@NgModule({
  declarations: [AppComponent, HomePage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    InventoryDataModule,
    InventoryFeatureProductsModule,
    SharedModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
