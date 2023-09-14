import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { ProductModel, ProductWithAlias, toProductModelArray, toProductWithAliasArray } from '../entities';
import { ProductDto } from '../entities/product.dto';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private readonly endpoint = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductDto[]>(this.endpoint).pipe(
      map((data) => {
        const items = toProductModelArray.fromProductDtoArray(data);
        return items;
      })
    );
  }
}
