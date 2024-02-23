import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'devmyself-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {}
