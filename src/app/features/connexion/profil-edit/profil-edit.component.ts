import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../core/services/user.service';
import {Router} from '@angular/router';
import {UserModel} from '../../../core/models/UserModel';
import {SessionService} from '../../../core/services/session.service';

@Component({
  selector: 'app-profil-edit',
  templateUrl: './profil-edit.component.html',
  styleUrls: ['./profil-edit.component.scss']
})
export class ProfilEditComponent implements OnInit {

  profilUserForm: FormGroup;
  userModels:UserModel[];
  constructor(
    private formBuilder:FormBuilder,
    public userService:UserService,
    private sessionService:SessionService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsername(this.sessionService.getUsername()).subscribe( data => {
      this.userModels = data;
    });
    this.intiForm();
  }

  intiForm(){
    this.profilUserForm = this.formBuilder.group({
      email:new FormControl('',[Validators.required]),
      name:new FormControl('',[Validators.required]),
      prenom:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }

  onSubmitForm()
  {
    this.userService.editUserProfil(this.profilUserForm.getRawValue(),this.sessionService.getUsername()).subscribe(data => {
      this.userModels = data;
    });
    this.sessionService.remove();
    return this.router.navigateByUrl('');
  }
}
