import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {ProfilEditComponent} from './profil-edit/profil-edit.component';


const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'profil',component:ProfilEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnexionRoutingModule { }
