import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConnexionService} from '../../../core/services/connexion.service';
import {SessionService} from '../../../core/services/session.service';
import {Router} from '@angular/router';
import {ToastService} from '../../../core/services/toast.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private connexionService: ConnexionService,
    private sessionService: SessionService,
    private router:Router,
    private toastService:ToastService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginGroup = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onSubmitForm(){
    this.isLoading = true;
    this.connexionService.login(this.loginGroup.getRawValue()).subscribe(data => {
      this.sessionService.start(data);
      this.isLoading = false;
      this.router.navigateByUrl('');
    },error => {
      this.isLoading = false;
      this.toastService.showErrorLogin();
    })
  }
}
