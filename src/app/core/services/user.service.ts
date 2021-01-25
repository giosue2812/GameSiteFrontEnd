import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {UserModel} from '../models/UserModel';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {UserProfilModel} from '../models/UserProfilModel';
import {$t} from 'codelyzer/angular/styles/chars';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{

  isLoading$ = new BehaviorSubject<boolean>(false);
  userModel$ = new BehaviorSubject<UserModel[]>([]);
  constructor(private httpClient:HttpClient) { }

  userList(){
    this.isLoading$.next(true);
    this.httpClient.get<UserModel[]>(environment.url+'users').subscribe(data => {
      this.userModel$.next(data);
      this.isLoading$.next(false);
    });
    return this.userModel$;
  }

  userNew(userModel:UserModel){
    this.httpClient.post<UserModel[]>(environment.url+'user/new',userModel).subscribe(data => {
      this.userModel$.next(data);
    });
    return this.userModel$;
  }

  getUser(userID:number){
    this.isLoading$.next(true);
    this.httpClient.get<UserModel[]>(environment.url+'user/'+userID).subscribe(data => {
      this.userModel$.next(data);
      console.log(data);
      this.isLoading$.next(false);
    });
    return this.userModel$;
  }

  getUsername(username:string){
    this.isLoading$.next(true);
    this.httpClient.get<UserModel[]>(environment.url+'user/username/'+username).subscribe(data => {
      this.userModel$.next(data);
      this.isLoading$.next(false);
    });
    return this.userModel$;
  }

  editUserProfil(userProfilModel:UserProfilModel,username:string)
  {
    this.isLoading$.next(true);
    this.httpClient.put<UserModel[]>(environment.url+'user/edit/profil/'+username,userProfilModel).subscribe(data => {
      this.userModel$.next(data);
      this.isLoading$.next(false);
    });
    return this.userModel$;
  }

  editUser(userModel:UserModel,userId:number){
    this.httpClient.put<UserModel[]>(environment.url+'user/editRole/'+userId,userModel).subscribe(data => {
      this.userModel$.next(data);
    });
    return this.userModel$;
  }

  deleteUser(userId:number){
    this.isLoading$.next(true);
    this.httpClient.delete<UserModel[]>(environment.url+'user/delete/'+userId).subscribe(data => {
      this.userModel$.next(data);
      this.isLoading$.next(false);
    });
    return this.userModel$;
  }
  ngOnDestroy(): void {
    this.userModel$.unsubscribe();
    this.isLoading$.unsubscribe();
  }
}
