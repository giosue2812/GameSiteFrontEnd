import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {GameModel} from "../models/GameModel";
import {environment} from "../../../environments/environment";
import {GameDetailModel} from '../models/GameDetailModel';

@Injectable({
  providedIn: 'root'
})
export class GameService implements OnDestroy{

  isLoading$ = new BehaviorSubject<boolean>(false);

  gameModel$  = new BehaviorSubject<GameModel[]>([]);

  gameDetailModel$ = new BehaviorSubject<GameDetailModel[]>([]);

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

  game(gameId:Number){
    this.isLoading$.next(true);
    this.httpClient.get<GameDetailModel[]>(environment.url+'game/'+gameId).subscribe(
      data =>{
        this.gameDetailModel$.next(data);
        this.isLoading$.next(false);
      });
    return this.gameDetailModel$;
  }

  ngOnDestroy(): void {
    this.isLoading$.unsubscribe();
    this.gameModel$.unsubscribe();
    this.gameDetailModel$.unsubscribe();
  }
}
