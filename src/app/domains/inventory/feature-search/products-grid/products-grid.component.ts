import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private service: InventoryFacade, private router: Router) {}

  ngOnInit(): void {
    this.items$ = this.service.search$;
  }

  onTileItemClicked(item: TileItemModel): void {
    this.router.navigate(['product', item.id]);
  }
}
