import {Component, NgModule, OnInit} from '@angular/core';
import {GameModel} from '../../../core/models/GameModel';
import {GameService} from '../../../core/services/game.service';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {GameDetailModel} from '../../../core/models/GameDetailModel';
import {YouTubePlayerModule} from '@angular/youtube-player';


@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.scss']
})
export class GameEditComponent implements OnInit {

  selectFile: File;
  gameEditForm:FormGroup;
  gameModelChoice:GameModel[];
  gameModelDetail:GameDetailModel[];
  constructor(
    private gameService: GameService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.gameService.gameList().subscribe(data => {
      this.gameModelChoice = data;
    });

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.initForm();
  }

  initForm(){
    this.gameEditForm = this.formBuilder.group({
      titre: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(10)]),
      genre: new FormGroup({label:new FormControl('')},Validators.required),
      editeur: new FormGroup({label: new FormControl('')},Validators.required),
      platform: new FormGroup({label: new FormControl('')},Validators.required),
      video: new FormControl('',[Validators.required])
    })
  }

  /**
   * @param form: NgForm
   */
  onSubmitFormChoiceGame(form:NgForm){
    this.gameService.game(form.form.get('choiceGame').value).subscribe(data => {
      this.gameModelDetail = data;
    })
  }

  onSubmitEditForm(){
    console.log(this.gameEditForm.getRawValue());
    console.log(this.selectFile);
  }

  submitFile(event){
    this.selectFile = event.target.files[0];
  }
}
