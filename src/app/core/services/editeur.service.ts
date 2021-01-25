import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {EditeurModel} from '../models/EditeurModel';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditeurService implements OnDestroy{

  editeurModel$ = new BehaviorSubject<EditeurModel[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private httpClient:HttpClient) { }

  editeurList(){
    this.isLoading$.next(true)
    this.httpClient.get<EditeurModel[]>(environment.url+'editeurs').subscribe(
      data => {
        this.editeurModel$.next(data);
        this.isLoading$.next(false);
      });
    return this.editeurModel$;
  }

  editeurNew(editeurModel:EditeurModel){
    this.isLoading$.next(true);
    this.httpClient.post<EditeurModel[]>(environment.url+'editeur/new',editeurModel).subscribe(
      data => {
        this.editeurModel$.next(data);
        this.isLoading$.next(false);
      });
    return this.editeurModel$;
  }

  ngOnDestroy(): void {
    this.editeurModel$.unsubscribe();
    this.isLoading$.unsubscribe();
  }
}
