import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TileItemModel, toTileItemModelArray } from '@devmyself/shared';
import { map, Observable } from 'rxjs';

import { InventoryService } from '../../domain';

@Component({
  selector: 'devmyself-products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsSliderComponent implements OnInit {
  @Input() details:
    | {
        title: string;
        subtitle: string;
        description?: string;
      }
    | undefined;
  @Input() category: string | undefined;
  @Input() color: string | undefined;

  items$: Observable<TileItemModel[]> | undefined;

  get cssStyle() {
    return {
      background: this.color || '#666666',
    };
  }

  constructor(private service: InventoryService) {}

  ngOnInit(): void {
    this.items$ = this.service.getAllProducts().pipe(map((items) => toTileItemModelArray.fromProductModelArray(items)));
  }
}
