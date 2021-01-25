import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ListEnvieModel} from '../models/ListEnvieModel';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListEnvieService implements OnDestroy{

  isLoading$ = new BehaviorSubject<boolean>(false);
  listEnvie$ = new BehaviorSubject<ListEnvieModel[]>([]);

  constructor(private httpClient: HttpClient) { }

  listEnvieList(){
    this.isLoading$.next(true);
    this.httpClient.get<ListEnvieModel[]>(environment.url+'listEnvies').subscribe(
      data => {
        this.listEnvie$.next(data);
        this.isLoading$.next(false);
      });
    return this.listEnvie$;
  }

  listEnvie(listEnvieId:Number){
    this.isLoading$.next(true);
    this.httpClient.get<ListEnvieModel[]>(environment.url+'listEnvie/'+listEnvieId).subscribe(data =>{
      this.listEnvie$.next(data);
      this.isLoading$.next(false);
    });
    return this.listEnvie$;
  }

  ngOnDestroy(): void {
    this.listEnvie$.unsubscribe();
  }
}
