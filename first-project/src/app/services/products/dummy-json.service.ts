import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { ProductsResponse } from '../../interfaces/products-response';


@Injectable({
  providedIn: 'root'
})

export class DummyJsonService {
  _http = inject(HttpClient);
  apiUrlProducts = 'https://dummyjson.com/products';

  returnAllProducts() {
    return this._http.get<ProductsResponse>(this.apiUrlProducts).pipe(map(resp => resp.products));
  }
}
