import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from 'rxjs';
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
        this.isLoading$.next(false)
      });
    return this.gameDetailModel$;
  }

  gameEdit(gameModel:GameModel, gameId:number){
    this.httpClient.put<GameDetailModel[]>(environment.url+'game/edit/'+gameId,gameModel).subscribe(
      data => {
        this.gameDetailModel$.next(data);
      });
    return this.gameDetailModel$;
  }

  gameUpload(file: File,gameId){
    const formData = new FormData();
    formData.append('picture',file,file.name);
    return this.httpClient.post(environment.url+'game/upload/'+gameId,formData).subscribe(res => {
      console.log(res);
    })
  }

  videoDelete(videoId:Number){
    this.httpClient.delete<GameDetailModel[]>(environment.url+'video/delete/'+videoId).subscribe(
      data => {
        this.gameDetailModel$.next(data);
      });
    return this.gameDetailModel$;
  }

  gameNew(gameModel:GameModel){
    this.isLoading$.next(true);
    this.httpClient.post<GameModel[]>(environment.url+'game/new',gameModel).subscribe(
      data => {
        this.gameModel$.next(data);
        this.isLoading$.next(false);
      });
    return this.gameModel$;
  }

  gameDelete(idGame:number){
    this.isLoading$.next(true);
    this.httpClient.delete<GameModel[]>(environment.url+'game/delete/'+idGame).subscribe(
      data => {
        this.gameModel$.next(data);
        this.isLoading$.next(false);
      });
    return this.gameModel$;
  }

  ngOnDestroy(): void {
    this.gameModel$.unsubscribe();
    this.gameDetailModel$.unsubscribe();
  }
}
