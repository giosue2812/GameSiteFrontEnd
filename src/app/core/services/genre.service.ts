import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {GenreModel} from "../models/GenreModel";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GenreService implements OnDestroy{

  isLoading$ = new BehaviorSubject<boolean>(false);
  genreModel$ = new BehaviorSubject<GenreModel[]>([]);

  constructor(private httpClient:HttpClient) { }

  genreList(){
    this.isLoading$.next(true);
    this.httpClient.get<GenreModel[]>(environment.url+'genres').subscribe(
      data => {
        this.genreModel$.next(data);
        this.isLoading$.next(false);
      });
    return this.genreModel$;
  }

  genreNew(genreModel:GenreModel){
    this.isLoading$.next(true);
    this.httpClient.post<GenreModel[]>(environment.url+'genre/new',genreModel).subscribe(
      data => {
        this.genreModel$.next(data);
        this.isLoading$.next(false);
      });
    return this.genreModel$;
  }

  ngOnDestroy(): void {
    this.isLoading$.unsubscribe();
    this.genreModel$.unsubscribe();
  }
}
