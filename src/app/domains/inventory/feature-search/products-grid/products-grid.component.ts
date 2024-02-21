import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TileItemModel } from '@devmyself/shared/util-common';
import { Observable } from 'rxjs';

import { InventoryFacade } from '../../data';

@Component({
  selector: 'devmyself-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsGridComponent implements OnInit {
  @Input() query: string | undefined;

  items$: Observable<TileItemModel[]> | undefined;

  constructor(private service: InventoryFacade) {}

  ngOnInit(): void {
    this.items$ = this.service.search$;
  }
}
