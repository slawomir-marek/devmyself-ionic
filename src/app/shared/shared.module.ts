import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SearchBarComponent, TileItemComponent, TilesGridComponent, TilesSliderComponent } from './components';
import { NgLetDirective } from './directives';

@NgModule({
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  exports: [
    IonicModule,
    ReactiveFormsModule,
    NgLetDirective,
    TileItemComponent,
    TilesSliderComponent,
    TilesGridComponent,
    SearchBarComponent,
  ],
  declarations: [NgLetDirective, TileItemComponent, TilesSliderComponent, TilesGridComponent, SearchBarComponent],
  providers: [],
})
export class SharedModule {}
