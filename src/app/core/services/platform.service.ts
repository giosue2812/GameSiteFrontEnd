import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {PlatformModel} from '../models/PlatformModel';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  platformModel$ = new BehaviorSubject<PlatformModel[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private httpClient:HttpClient) { }

  platformList(){
    this.isLoading$.next(true);
    this.httpClient.get<PlatformModel[]>(environment.url+'platforms').subscribe(
      data => {
        this.platformModel$.next(data);
        this.isLoading$.next(false);
      });
    return this.platformModel$;
  }

  platformNew(platformModel: PlatformModel){
    this.isLoading$.next(true);
    this.httpClient.post<PlatformModel[]>(environment.url+'platform/new',platformModel).subscribe(
      data => {
        this.platformModel$.next(data);
        this.isLoading$.next(false);
      });
    return this.platformModel$;
  }
}
