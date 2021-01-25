import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenModel} from '../models/TokenModel';
import {environment} from '../../../environments/environment';
import {LoginModel} from '../models/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private httpClient: HttpClient) { }

  login(login: LoginModel):Observable<TokenModel>{
    return this.httpClient.post<TokenModel>(environment.url+'login_check',login)
  }
}
