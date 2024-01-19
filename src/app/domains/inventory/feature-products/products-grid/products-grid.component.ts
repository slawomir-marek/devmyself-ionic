import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TileItemModel } from '@devmyself/shared/ui-common';
import { map, Observable } from 'rxjs';

import { InventoryService, toTileItemModelArray } from '../../data';

@Component({
  selector: 'devmyself-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsGridComponent implements OnInit {
  items$: Observable<TileItemModel[]> | undefined;

  constructor(private service: InventoryService) {}

  ngOnInit(): void {
    this.items$ = this.service.getAllProducts().pipe(map((items) => toTileItemModelArray.fromProductModelArray(items)));
  }
}
