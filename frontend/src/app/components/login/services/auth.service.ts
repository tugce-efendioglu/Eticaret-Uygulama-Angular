import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoginResponseModel } from '../models/login-response.model';
import { LoginModel } from '../models/login.model';
import { GenericHttpService } from 'src/app/common/services/generic-http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http : GenericHttpService
  ) { }


  login(model:LoginModel, callback: (res:LoginResponseModel)=>void){

    this._http.post<LoginResponseModel>("auth/login",model,res =>callback(res));
  }
}
