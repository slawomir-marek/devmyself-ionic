import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { InventoryFacade } from '@devmyself/inventory/data';
import { TileItemModel } from '@devmyself/shared/util-common';
import { Observable } from 'rxjs';

@Component({
  selector: 'devmyself-products-recommended',
  templateUrl: './products-recommended.component.html',
  styleUrls: ['./products-recommended.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsRecomendedComponent implements OnInit {
  private readonly menCategory = `men's clothing`;
  private readonly womenCategory = `women's clothing`;
  private readonly jeweleryCategory = `jewelery`;

  menDetails = {
    title: 'Clothes for men',
    subtitle: 'Streetwear fashion you must have',
    description: 'Discover the mix that inspires your wardrobe',
  };
  womenDetails = {
    title: 'Clothes for women',
    subtitle: 'Must have for this season',
  };
  jeweleryDetails = {
    title: 'Jewelery',
    subtitle: 'Something shiny for him and her',
  };

  menItems$: Observable<TileItemModel[]> | undefined;
  womenItems$: Observable<TileItemModel[]> | undefined;
  jeweleryItems$: Observable<TileItemModel[]> | undefined;

  constructor(private service: InventoryFacade) {
    // TODO: in ngOnInit call something like recommendation.service to get recommendation configuration
  }

  ngOnInit(): void {
    this.service.fetchAll();

    this.menItems$ = this.service.recommendedByCategory$(this.menCategory);
    this.womenItems$ = this.service.recommendedByCategory$(this.womenCategory);
    this.jeweleryItems$ = this.service.recommendedByCategory$(this.jeweleryCategory);
  }
}
