import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgLetDirective } from './directives';

@NgModule({
  imports: [CommonModule],
  exports: [NgLetDirective],
  declarations: [NgLetDirective],
  providers: [],
})
export class SharedModule {}
