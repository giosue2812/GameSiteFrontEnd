import { Component, OnInit } from '@angular/core';
import {EmailValidator, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../core/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  inscriptionGroup:FormGroup;

  constructor(private formBuilder:FormBuilder,public userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.inscriptionGroup = this.formBuilder.group({
      name:new FormControl('',[Validators.required]),
      prenom:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.email]),
      password:new FormControl('',[Validators.required])
    });
  }

  onSubmitForm(){
    this.userService.userNew(this.inscriptionGroup.getRawValue()).subscribe(data =>{
      console.log(data);
    });
    return this.router.navigateByUrl('connexion');
  }
}
