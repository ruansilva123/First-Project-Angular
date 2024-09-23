import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


// Do the request to backend.
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _http = inject(HttpClient);
  apiUrlLogin = 'https://dummyjson.com/auth/login';

  login(username: string, password: string){
    return this._http.post(this.apiUrlLogin,{
      username: username,
      password: password
    }).pipe(
      map((resp: any)=>{
        return {
          email: resp.email,
          firstName: resp.firstName,
          lastName: resp.lastName,
          image: resp.image
        }
      })
    )
  }
}