import {Component, NgModule, OnInit} from '@angular/core';
import {GameModel} from '../../../core/models/GameModel';
import {GameService} from '../../../core/services/game.service';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {GameDetailModel} from '../../../core/models/GameDetailModel';
import {GenreService} from "../../../core/services/genre.service";
import {GenreModel} from "../../../core/models/GenreModel";
import {EditeurModel} from '../../../core/models/EditeurModel';
import {EditeurService} from '../../../core/services/editeur.service';
import {PlatformModel} from '../../../core/models/PlatformModel';
import {PlatformService} from '../../../core/services/platform.service';
import {ActivatedRoute, Router} from '@angular/router';
import {interval} from 'rxjs';


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
  genreModel : GenreModel[];
  editeurModel : EditeurModel[];
  platformModel: PlatformModel[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private platformService: PlatformService,
    public gameService: GameService,
    private genreService: GenreService,
    private editeurService: EditeurService,
    private formBuilder: FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.paramMap.get('id')){
      this.gameService.game(parseInt(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe(data => {
        this.gameModelDetail = data;
      })
    }
    else{
      this.gameService.gameList().subscribe(data => {
        this.gameModelChoice = data;
      });
    }
    this.genreService.genreList().subscribe(data => {
      this.genreModel = data;
    });

    this.editeurService.editeurList().subscribe(data => {
      this.editeurModel = data;
    });

    this.platformService.platformList().subscribe(data => {
      this.platformModel = data;
    });
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.initForm();
  }

  initForm(){
    this.gameEditForm = this.formBuilder.group({
      id:new FormControl('',[Validators.required]),
      nom: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(10)]),
      genre: new FormControl('',[Validators.required]),
      editeur: new FormControl('',[Validators.required]),
      platform: new FormControl('',[Validators.required]),
      video: new FormControl('',[Validators.required]),
      prix:new FormControl('',[Validators.required]),
      dateSortie: new FormControl('',[Validators.required]),
      dateAchat: new FormControl('',[Validators.required])
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

  submitFile(event){
    this.selectFile = event.target.files[0];
  }

  onSubmitEditForm(){
    let videoYoutube=this.gameEditForm.get('video').value;
    if(this.gameEditForm.get('video').value) {
      this.gameEditForm.get('video').setValue(this.getIdValue(videoYoutube));
    }
    this.gameService.gameEdit(this.gameEditForm.getRawValue(),this.gameEditForm.get('id').value);
    if(this.selectFile) {
      this.gameService.gameUpload(this.selectFile, this.gameEditForm.get('id').value);
    }
    this.router.navigateByUrl('game');
  }

  deleteVideo(idVideo:string){
    this.gameService.videoDelete(parseInt(idVideo)).subscribe(data => {
      this.gameModelDetail = data;
    })
  }

  deleteGame(id:number){
    this.gameService.gameDelete(id);
    this.router.navigate(['game']);
  }

  getIdValue(video: string){
      let match = video.match(/v=([0-9a-z_-]{1,20})/i);
      return (match ? match['1'] : false);
  }
}
