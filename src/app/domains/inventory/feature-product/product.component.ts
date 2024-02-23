import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TileItemModel } from '@devmyself/shared/util-common';
import { map, Observable } from 'rxjs';

import { InventoryFacade } from '../data';

@Component({
  selector: 'devmyself-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  item$: Observable<TileItemModel> | undefined;
  loadingOrError$!: Observable<boolean>;
  loading$!: Observable<boolean>;
  error$!: Observable<boolean>;

  constructor(private service: InventoryFacade, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.service.fetchSingle(productId);

      this.loading$ = this.service.isLoading$();
      this.error$ = this.service.isError$();
      this.loadingOrError$ = this.service.isLoadingOrError$();

      this.item$ = this.service.itemById$(productId);
    }
  }
}
