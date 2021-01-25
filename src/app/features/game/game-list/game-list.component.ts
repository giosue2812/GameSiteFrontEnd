import { Component, OnInit } from '@angular/core';
import {GameService} from '../../../core/services/game.service';
import {GameModel} from '../../../core/models/GameModel';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  game: GameModel[];

  page = 1;
  pageSize = 5;


  constructor(public gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.gameList().subscribe(
      data => {
        this.game = data
      }
    )
  }

}
