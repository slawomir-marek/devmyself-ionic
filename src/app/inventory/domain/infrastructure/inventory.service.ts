import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { ProductWithAlias, ProductWithOpaque, toProductWithAliasArray, toProductWithOpaqueArray } from '../entities';
import { ProductDto } from '../entities/product.dto';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private readonly endpoint = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(this.endpoint).pipe(map((data) => data));
  }

  getAllWithAlias(): Observable<ProductWithAlias[]> {
    return this.http
      .get<ProductDto[]>(this.endpoint)
      .pipe(map((data) => toProductWithAliasArray.fromProductDtoArray(data)));
  }

  getAllWithOpaque(): Observable<ProductWithOpaque[]> {
    return this.http.get<ProductDto[]>(this.endpoint).pipe(
      map((data) => {
        const items = toProductWithOpaqueArray.fromProductDtoArray(data);
        return items;
      })
    );
  }
}
