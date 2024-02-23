import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TileItemModel } from '@devmyself/shared/util-common';

@Component({
  selector: 'devmyself-products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsSliderComponent {
  @Input() category: string | undefined;

  @Input() details:
    | {
        title: string;
        subtitle: string;
        description?: string;
      }
    | undefined;

  @Input() color: string | undefined;
  @Input() items: TileItemModel[] | undefined;

  get cssStyle() {
    return {
      background: this.color || '#666666',
    };
  }

  constructor(private router: Router) {}

  onTileItemClicked(item: TileItemModel): void {
    this.router.navigate(['product', item.id]);
  }
}
