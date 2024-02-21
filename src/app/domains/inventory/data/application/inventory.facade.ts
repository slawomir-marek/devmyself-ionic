import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TileItemModel } from '@devmyself/shared/util-common';
import { BehaviorSubject, map, Observable, take } from 'rxjs';

import { toTileItemModelArray } from '../entities/product.mapper';
import { InventoryService } from '../infrastructure/inventory.service';

@Injectable({ providedIn: 'root' })
export class InventoryFacade {
  private _query: BehaviorSubject<string> = new BehaviorSubject('');
  private _search: BehaviorSubject<TileItemModel[]> = new BehaviorSubject(<any>[]);
  private _recommended: BehaviorSubject<TileItemModel[]> = new BehaviorSubject(<any>[]);

  get query$(): Observable<string> {
    return this._query.asObservable();
  }

  get search$(): Observable<TileItemModel[]> {
    return this._search.asObservable();
  }

  get recommended$(): Observable<TileItemModel[]> {
    return this._recommended.asObservable();
  }

  constructor(private inventoryService: InventoryService, private router: Router) {}

  fetchRecommended(): void {
    this.getProducts()
      .pipe(take(1))
      .subscribe((value) => this._recommended.next(value));
  }

  executeSearch(query: string): void {
    this._query.next(query);
    this.router.navigate(['search'], { queryParams: { query } });

    this.getProductsByQuery(query)
      .pipe(take(1))
      .subscribe((value) => this._search.next(value));
  }

  private getProducts(): Observable<TileItemModel[]> {
    return this.inventoryService.getProducts().pipe(map((items) => toTileItemModelArray.fromProductModelArray(items)));
  }

  private getProductsByQuery(query: string | undefined): Observable<TileItemModel[]> {
    return this.inventoryService
      .getProductsByQuery(query)
      .pipe(map((items) => toTileItemModelArray.fromProductModelArray(items)));
  }
}
