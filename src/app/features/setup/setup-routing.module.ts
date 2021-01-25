import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SetupEditComponent} from './setup-edit/setup-edit.component';
import {IsAdminGuard} from '../../core/guard/is-admin.guard';
import {SetupUserEditComponent} from './setup-edit/setup-user-edit/setup-user-edit.component';


const routes: Routes = [
  {path:'',canActivate:[IsAdminGuard],component:SetupEditComponent},
  {path:'editer/:id',canActivate:[IsAdminGuard],component:SetupUserEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
