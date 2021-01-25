import { Injectable } from '@angular/core';
import {TokenModel} from '../models/TokenModel';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private loginModel;

  start(token: TokenModel){
    sessionStorage.setItem('TOKEN',token.token);
  }

  get isLogged():boolean{
    return sessionStorage.getItem('TOKEN') != null;
  }

  get isAdmin():boolean{
    let role = [];
    this.tokenDecode();
    this.loginModel.roles.forEach(function(item) {
      role.push(item)
    });
    return !!role.find(p => p === 'ROLE_ADMIN');
  }

  getUsername():string
  {
    this.tokenDecode();
    return this.loginModel.username;
  }

  get tokken():string{
    return sessionStorage.getItem('TOKEN');
  }

  remove(){
    sessionStorage.removeItem('TOKEN');
  }

  private tokenDecode(){
    this.loginModel = jwt_decode(this.tokken)
  }
}
