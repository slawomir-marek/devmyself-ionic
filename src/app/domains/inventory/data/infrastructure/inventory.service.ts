import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';

import { ProductDto } from '../entities/product.dto';
import { toProductModelArray } from '../entities/product.mapper';
import { ProductModel } from '../entities/product.model';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private readonly endpoint = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductDto[]>(this.endpoint).pipe(
      map((data) => {
        const items = toProductModelArray.fromProductDtoArray(data);
        return items;
      })
    );
  }

  getProductsByQuery(query: string | undefined): Observable<ProductModel[]> {
    return this.http.get<ProductDto[]>(this.endpoint).pipe(
      map((result) =>
        query
          ? result.filter(
              (x) => x.title.toLocaleLowerCase().includes(query) || x.description.toLocaleLowerCase().includes(query)
            )
          : result
      ),
      map((data) => {
        const items = toProductModelArray.fromProductDtoArray(data);
        return items;
      })
    );
  }
}
