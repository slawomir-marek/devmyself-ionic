import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TileItemModel } from '@devmyself/shared/util-common';
import { BehaviorSubject, catchError, combineLatest, finalize, map, Observable, of, take } from 'rxjs';

import { toTileItemModelArray } from '../entities/product.mapper';
import { InventoryService } from '../infrastructure/inventory.service';

@Injectable({ providedIn: 'root' })
export class InventoryFacade {
  private _query: BehaviorSubject<string> = new BehaviorSubject('');
  private _itemsStore: BehaviorSubject<Record<string, TileItemModel>> = new BehaviorSubject({});
  private _recommendedStore: BehaviorSubject<TileItemModel[]> = new BehaviorSubject(<any>[]);

  private _loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _error: BehaviorSubject<boolean> = new BehaviorSubject(false);

  query$(): Observable<string> {
    return this._query.asObservable();
  }

  items$(): Observable<TileItemModel[]> {
    return this._itemsStore.asObservable().pipe(map((data) => Object.values(data)));
  }

  itemsEntities$(): Observable<Record<string, TileItemModel>> {
    return this._itemsStore.asObservable();
  }

  itemById$(id: string): Observable<TileItemModel> {
    return this._itemsStore.pipe(map((items) => items[id]));
  }

  recommended$(): Observable<TileItemModel[]> {
    return this._recommendedStore.asObservable();
  }

  isLoadingOrError$(): Observable<boolean> {
    return combineLatest([this._loading.asObservable(), this._error.asObservable()]).pipe(
      map(([loading, error]) => loading || error)
    );
  }

  isLoading$(): Observable<boolean> {
    return this._loading.asObservable();
  }

  isError$(): Observable<boolean> {
    return this._error.asObservable();
  }

  constructor(private inventoryService: InventoryService, private router: Router) {}

  fetchAll(): void {
    const isNotEmpty = Object.keys(this._itemsStore.value).length > 0;
    if (isNotEmpty) {
      return;
    }

    this._loading.next(true);

    this.getProducts().subscribe((items) => this._itemsStore.next(this.mapArrayToRecord(items)));
  }

  fetchSingle(id: string): void {
    const isNotEmpty = Object.keys(this._itemsStore.value).length > 0;
    const exist = !!(this._itemsStore.value && this._itemsStore.value[id]);

    if (isNotEmpty && exist) {
      return;
    }

    if (isNotEmpty && !exist) {
      this._error.next(true);
      return;
    }

    this._loading.next(true);

    this.getProducts().subscribe((items) => {
      const store = this.mapArrayToRecord(items);

      if (!store[id]) {
        this._error.next(true);
      }

      this._itemsStore.next(store);
    });
  }

  fetchRecommended(): void {
    this._loading.next(true);

    this.getProducts().subscribe((value) => this._recommendedStore.next(value));
  }

  executeSearch(query: string): void {
    this._query.next(query);
    this._loading.next(true);

    this.router.navigate(['search'], { queryParams: { query } });

    this.getProductsByQuery(query).subscribe((items) => this._itemsStore.next(this.mapArrayToRecord(items)));
  }

  private mapArrayToRecord(array: TileItemModel[]): Record<string, TileItemModel> {
    return array.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {} as Record<string, TileItemModel>);
  }

  private getProducts(): Observable<TileItemModel[]> {
    return this.inventoryService.getProducts().pipe(
      map((items) => toTileItemModelArray.fromProductModelArray(items)),
      take(1),
      finalize(() => this._loading.next(false)),
      catchError(() => {
        this._loading.next(false);
        this._error.next(true);

        return of([]);
      })
    );
  }

  private getProductsByQuery(query: string | undefined): Observable<TileItemModel[]> {
    return this.inventoryService.getProductsByQuery(query).pipe(
      map((items) => toTileItemModelArray.fromProductModelArray(items)),
      take(1),
      finalize(() => this._loading.next(false)),
      catchError(() => {
        this._loading.next(false);
        this._error.next(true);

        return of([]);
      })
    );
  }
}
