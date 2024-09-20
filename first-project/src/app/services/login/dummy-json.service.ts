import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DummyJsonService {
  private apiUrlLogin = 'https://dummyjson.com/users'


  constructor(private http: HttpClient) { }


  getUsers(): Observable<any>{
    return this.http.get(this.apiUrlLogin);
  } 
}
