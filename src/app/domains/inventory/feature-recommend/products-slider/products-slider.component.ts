import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TileItemModel } from '@devmyself/shared/ui-common';
import { map, Observable } from 'rxjs';

import { InventoryService, toTileItemModelArray } from '../../data';

@Component({
  selector: 'devmyself-products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsSliderComponent implements OnInit {
  @Input() category: string | undefined;

  @Input() details:
    | {
        title: string;
        subtitle: string;
        description?: string;
      }
    | undefined;

  @Input() color: string | undefined;

  items$: Observable<TileItemModel[]> | undefined;

  get cssStyle() {
    return {
      background: this.color || '#666666',
    };
  }

  constructor(private service: InventoryService) {}

  ngOnInit(): void {
    // TODO: replace getAllProduct with call based on category input
    this.items$ = this.service.getProducts().pipe(map((items) => toTileItemModelArray.fromProductModelArray(items)));
  }
}