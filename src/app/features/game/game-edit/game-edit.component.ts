import { Component, OnInit } from '@angular/core';
import {GameModel} from '../../../core/models/GameModel';
import {GameService} from '../../../core/services/game.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.scss']
})
export class GameEditComponent implements OnInit {

  gameModelChoice:GameModel[];
  gameModel:GameModel[];
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.gameList().subscribe(data => {
      this.gameModelChoice = data;
    })
  }

  /**
   * @param form: NgForm
   */
  onSubmitFormChoiceGame(form:NgForm){
    console.log(form.value);
  }
}
