import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../core/services/user.service';
import {UserModel} from '../../../../core/models/UserModel';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'app-setup-user-edit',
  templateUrl: './setup-user-edit.component.html',
  styleUrls: ['./setup-user-edit.component.scss']
})
export class SetupUserEditComponent implements OnInit {

  userModel:UserModel[];
  editFormRole:FormGroup;
  userId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
  constructor(public userService:UserService, private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUser(this.userId).subscribe(data =>{
      this.userModel = data;
    });
    this.initForm();
  }

  initForm(){
    this.editFormRole = this.formBuilder.group({
      role:new FormControl('',[Validators.required])
    })
  }

  onSubmitForm(){
    this.userService.editUser(this.editFormRole.getRawValue(),this.userId).subscribe(data => {
      console.log(data);
      this.userModel = data
    })
  }
}
