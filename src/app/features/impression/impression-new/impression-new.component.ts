import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GameModel} from '../../../core/models/GameModel';
import {GameService} from '../../../core/services/game.service';
import {ImpressionService} from '../../../core/services/impression.service';
import {ImpressionModel} from '../../../core/models/ImpressionModel';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-impression-new',
  templateUrl: './impression-new.component.html',
  styleUrls: ['./impression-new.component.scss']
})
export class ImpressionNewComponent implements OnInit {

  gameChoice:GameModel[];
  impressionModel:ImpressionModel[];
  gameChoiceForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    public gameService:GameService,
    public impressionService:ImpressionService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.gameService.gameList().subscribe(data => {
      this.gameChoice = data;
    });
    this.initForm();
  }

  initForm(){
    this.gameChoiceForm = this.formBuilder.group({
      idGame:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
      howEnd:new FormControl('',[Validators.required]),
      tauxDeCompletion:new FormControl('',[Validators.required])
    })
  }

  onSubmitNewForm(){
      this.impressionService.impressionNew(this.gameChoiceForm.getRawValue()).subscribe(data => {
        this.impressionModel = data;
      });
    this.router.navigateByUrl('impression');
  }

}
