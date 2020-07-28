import { Component, OnInit } from '@angular/core';
import {GameService} from "../../core/services/game.service";
import {GameModel} from "../../core/models/GameModel";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  game: GameModel[];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.gameList().subscribe(
      data => {
        this.game = data
      }
    )
  }

}
