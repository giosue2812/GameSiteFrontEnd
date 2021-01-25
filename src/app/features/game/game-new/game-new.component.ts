import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GenreModel} from '../../../core/models/GenreModel';
import {EditeurModel} from '../../../core/models/EditeurModel';
import {PlatformModel} from '../../../core/models/PlatformModel';
import {GameService} from '../../../core/services/game.service';
import {GenreService} from '../../../core/services/genre.service';
import {EditeurService} from '../../../core/services/editeur.service';
import {PlatformService} from '../../../core/services/platform.service';
import {Router} from '@angular/router';
import {GameModel} from '../../../core/models/GameModel';
import {interval} from 'rxjs';

@Component({
  selector: 'app-game-new',
  templateUrl: './game-new.component.html',
  styleUrls: ['./game-new.component.scss']
})
export class GameNewComponent implements OnInit {

  gameNewForm: FormGroup;
  genreModel:GenreModel[];
  editeurModel:EditeurModel[];
  platformModel:PlatformModel[];
  gameModel:GameModel[];
  constructor(
    public gameService:GameService,
    private genreService:GenreService,
    private editeurService:EditeurService,
    private platformService:PlatformService,
    private formBuilder: FormBuilder,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.genreService.genreList().subscribe(data => {
      this.genreModel = data;
    });

    this.platformService.platformList().subscribe(data => {
      this.platformModel = data;
    });

    this.editeurService.editeurList().subscribe(data => {
      this.editeurModel = data;
    });

    this.initForm();
  }

  initForm(){
    this.gameNewForm = this.formBuilder.group({
      nom:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
      prix:new FormControl('',[Validators.required]),
      dateAchat:new FormControl('',[Validators.required]),
      genre: new FormControl('',[Validators.required]),
      editeur:new FormControl('',[Validators.required]),
      platform:new FormControl('',[Validators.required]),
      dateSortie:new FormControl('',[Validators.required])
    })
  }

  onSubmitNewForm(){
    this.gameService.gameNew(this.gameNewForm.getRawValue()).subscribe(data => {
      this.gameModel = data;
    });
    this.router.navigate(['game']);
  }
}
