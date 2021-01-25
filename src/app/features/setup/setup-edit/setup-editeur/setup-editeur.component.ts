import { Component, OnInit } from '@angular/core';
import {EditeurModel} from '../../../../core/models/EditeurModel';
import {EditeurService} from '../../../../core/services/editeur.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-setup-editeur',
  templateUrl: './setup-editeur.component.html',
  styleUrls: ['./setup-editeur.component.scss']
})
export class SetupEditeurComponent implements OnInit {

  editeurModel:EditeurModel[];
  editeurForm:FormGroup;

  page = 1;
  pageSize = 2;

  constructor(
    public editeurService:EditeurService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.editeurService.editeurList().subscribe(data => {
      this.editeurModel = data;
    });
    this.initForm();
  }

  initForm(){
    this.editeurForm = this.formBuilder.group({
      label:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required])
    })
  }

  onSubmitForm(){
      this.editeurService.editeurNew(this.editeurForm.getRawValue()).subscribe(data => {
        this.editeurModel = data;
      });
    this.editeurForm.reset();
  }
}
