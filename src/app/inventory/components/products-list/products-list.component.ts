import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductDto, ProductWithAlias, ProductWithOpaque } from '../../domain/entities';
import { InventoryService } from '../../domain/infrastructure/inventory.service';

@Component({
  selector: 'devmyself-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
  items$: Observable<ProductDto[]> | undefined;
  itemsWithAlias$: Observable<ProductWithAlias[]> | undefined;
  itemsWithOpaque$: Observable<ProductWithOpaque[]> | undefined;

  constructor(private service: InventoryService) {}

  ngOnInit(): void {
    this.items$ = this.service.getAll();
    this.itemsWithAlias$ = this.service.getAllWithAlias();
    this.itemsWithOpaque$ = this.service.getAllWithOpaque();
  }
}
