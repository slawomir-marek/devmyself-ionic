import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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

  constructor(private service: InventoryFacade) {}

  ngOnInit(): void {
    // TODO: get recommended product by category
    this.service.fetchRecommended();

    this.items$ = this.service.recommended$;
  }
}
