import { Component, OnInit } from '@angular/core';
import {ImpressionModel} from '../../../core/models/ImpressionModel';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ImpressionService} from '../../../core/services/impression.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-impression-editer',
  templateUrl: './impression-editer.component.html',
  styleUrls: ['./impression-editer.component.scss']
})
export class ImpressionEditerComponent implements OnInit {

  impressionModel:ImpressionModel[];
  impressionEditerForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
              public impressionService:ImpressionService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.impressionService.getImpression(parseInt(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe(data => {
      this.impressionModel = data;
    });
    this.initForm();
  }

  initForm(){
    this.impressionEditerForm = this.formBuilder.group({
      description:new FormControl('',[Validators.required]),
      howEnd:new FormControl('',[Validators.required]),
      tauxDeCompletion:new FormControl('',[Validators.required])
    })
  }

  onSubmitEditForm(){
    this.impressionService.impressionEdit(this.impressionEditerForm.getRawValue(),parseInt(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe(data => {
      this.impressionModel = data
    });
    this.router.navigateByUrl('impression');
  }
}
