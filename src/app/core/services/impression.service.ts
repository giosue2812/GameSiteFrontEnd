import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ImpressionModel} from '../models/ImpressionModel';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImpressionService implements OnDestroy{

  isLoading$ = new BehaviorSubject<boolean>(false);
  impressionModel$ = new BehaviorSubject<ImpressionModel[]>([]);

  constructor(private httpClient:HttpClient) { }

  impressionList(){
    this.isLoading$.next(true);
    this.httpClient.get<ImpressionModel[]>(environment.url+'impressions').subscribe(
      data => {
        this.impressionModel$.next(data);
        this.isLoading$.next(false);
      });
    return this.impressionModel$;
  }

  impressionNew(impressionModel: ImpressionModel){
    this.isLoading$.next(true);
    this.httpClient.post<ImpressionModel[]>(environment.url+'impression/new',impressionModel).subscribe(
      data => {
        this.impressionModel$.next(data);
        this.isLoading$.next(false);
      });
    return this.impressionModel$;
  }

  impressionEdit(impressionModel:ImpressionModel,idImpression:number){
    this.isLoading$.next(true);
    this.httpClient.put<ImpressionModel[]>(environment.url+'impression/edit/'+idImpression,impressionModel).subscribe(
      data => {
        this.impressionModel$.next(data);
        this.isLoading$.next(false);
      });
    return this.impressionModel$;
  }

  getImpression(idImpression:number){
    this.isLoading$.next(true);
    this.httpClient.get<ImpressionModel[]>(environment.url+'impression/'+idImpression).subscribe(
      data => {
        this.impressionModel$.next(data);
        this.isLoading$.next(false);
      });
    return this.impressionModel$;
  }

  ngOnDestroy(): void {
    this.impressionModel$.unsubscribe();
  }
}
