import { Component, OnInit } from '@angular/core';
import {PlatformModel} from '../../../../core/models/PlatformModel';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PlatformService} from '../../../../core/services/platform.service';

@Component({
  selector: 'app-setup-platform',
  templateUrl: './setup-platform.component.html',
  styleUrls: ['./setup-platform.component.scss']
})
export class SetupPlatformComponent implements OnInit {

  platformModel: PlatformModel[];
  platformForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public platformService:PlatformService
  ) { }

  ngOnInit(): void {
    this.platformService.platformList().subscribe(data => {
      this.platformModel = data;
    });
    this.initForm();
  }

  initForm(){
    this.platformForm = this.formBuilder.group({
      label:new FormControl('',[Validators.required])
    })
  }

  onSubmitForm(){
    this.platformService.platformNew(this.platformForm.getRawValue()).subscribe(data => {
      this.platformModel = data;
    });
    this.platformForm.reset();
  }
}
