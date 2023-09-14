import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { TileItemComponent, TilesGridComponent, TilesSliderComponent } from './components';
import { NgLetDirective } from './directives';

@NgModule({
  imports: [CommonModule, IonicModule],
  exports: [IonicModule, NgLetDirective, TileItemComponent, TilesSliderComponent, TilesGridComponent],
  declarations: [NgLetDirective, TileItemComponent, TilesSliderComponent, TilesGridComponent],
  providers: [],
})
export class SharedModule {}
