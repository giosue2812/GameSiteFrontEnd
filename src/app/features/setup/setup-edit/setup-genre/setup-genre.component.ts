import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GenreModel} from '../../../../core/models/GenreModel';
import {GenreService} from '../../../../core/services/genre.service';

@Component({
  selector: 'app-setup-genre',
  templateUrl: './setup-genre.component.html',
  styleUrls: ['./setup-genre.component.scss']
})
export class SetupGenreComponent implements OnInit {

  genreModel:GenreModel[];
  genreForm: FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    public genreService:GenreService) { }

  ngOnInit(): void {
    this.genreService.genreList().subscribe(data => {
      this.genreModel = data;
    });
    this.initForm();
  }

  initForm(){
    this.genreForm = this.formBuilder.group({
      label:new FormControl('',[Validators.required])
    })
  }

  onSubmitForm(){
    this.genreService.genreNew(this.genreForm.getRawValue()).subscribe(data => {
      this.genreModel = data;
    });
    this.genreForm.reset();
  }
}
