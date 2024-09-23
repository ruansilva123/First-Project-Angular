import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, inject } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DummyJsonService {
  // constructor() { }
  _http = inject(HttpClient);
  apiUrlProducts = 'https://dummyjson.com/products';

  returnAllProducts() {
    return this._http.get(
      this.apiUrlProducts
    ).pipe(
      map((resp : any)=>{
        return {
          title : resp.title,
          description : resp.description,
          category : resp.category,
          price : resp.price
        }
      })
    )
  }
}
