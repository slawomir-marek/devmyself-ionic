import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TileItemModel } from '@devmyself/shared/util-common';
import { Observable } from 'rxjs';

import { InventoryFacade } from '../../data';

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

  constructor(private service: InventoryFacade, private router: Router) {}

  ngOnInit(): void {
    // TODO: get recommended product by category
    this.service.fetchRecommended();

    this.items$ = this.service.recommended$();
  }

  onTileItemClicked(item: TileItemModel): void {
    this.router.navigate(['product', item.id]);
  }
}
