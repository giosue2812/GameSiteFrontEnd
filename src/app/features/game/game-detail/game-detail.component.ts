import { Component, OnInit } from '@angular/core';
import {GameDetailModel} from '../../../core/models/GameDetailModel';
import {GameService} from '../../../core/services/game.service';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  gameDetailModel:GameDetailModel[];
  page = 1;
  pageSize = 1;

  constructor(public gameService:GameService,private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let idGame = parseInt(this.activateRoute.snapshot.paramMap.get('id'));
    this.gameService.game(idGame).subscribe(data => {
      this.gameDetailModel = data;
    });

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
