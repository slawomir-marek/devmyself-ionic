import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { InventoryDataModule } from '@devmyself/inventory/data';
import { InventoryFeatureRecommendsModule } from '@devmyself/inventory/feature-recommend';
import { SharedModule } from '@devmyself/shared/shared.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent, HeaderComponent, HomePage } from './shell';

@NgModule({
  declarations: [AppComponent, HomePage, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    InventoryDataModule,
    InventoryFeatureRecommendsModule,
    SharedModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
