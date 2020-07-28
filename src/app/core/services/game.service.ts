import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {GameModel} from "../models/GameModel";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GameService implements OnDestroy{

  isLoading$ = new BehaviorSubject<boolean>(false);

  gameModel$  = new BehaviorSubject<GameModel[]>([]);

  constructor(private httpClient:HttpClient) { }

  gameList(){
    this.isLoading$.next(true);
    this.httpClient.get<GameModel[]>(environment.url+'games').subscribe(
      data => {
        this.gameModel$.next(data);
        this.isLoading$.next(false);
      });
    return this.gameModel$;
  }

  ngOnDestroy(): void {
    this.isLoading$.unsubscribe();
    this.gameModel$.unsubscribe();
  }
}
