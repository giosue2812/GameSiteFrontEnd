import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListEnvieComponent} from './list-envie/list-envie.component';


const routes: Routes = [
  {path:'',component:ListEnvieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListEnvieRoutingModule { }
