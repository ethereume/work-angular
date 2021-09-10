import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account, Created, Distionary, Register } from './models/dictionary';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }

      public getDist() {
        return this.http.get<Distionary>("http://localhost:8080/user/all-dictionary");
      }

      public getAccount(iban:String) {
        return this.http.get<Account>(`http://localhost:8080/user/account/${iban}`);
      }
      
      public register(register:Register) {
        console.log(register);
        return this.http.post<Created>("http://localhost:8080/user/register",JSON.stringify(register),{
          headers :{ 
            'content-type': 'application/json'
          }  
        });
      }
}
