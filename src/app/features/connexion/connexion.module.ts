import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnexionRoutingModule } from './connexion-routing.module';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import {SharedModule} from '../../shared/shared.module';
import { ProfilEditComponent } from './profil-edit/profil-edit.component';


@NgModule({
  declarations: [LoginComponent, InscriptionComponent, ProfilEditComponent],
  imports: [
    CommonModule,
    ConnexionRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class ConnexionModule { }
