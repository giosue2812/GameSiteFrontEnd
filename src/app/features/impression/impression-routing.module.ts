import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImpressionListComponent} from './impression-list/impression-list.component';
import {ImpressionNewComponent} from './impression-new/impression-new.component';
import {ImpressionEditerComponent} from './impression-editer/impression-editer.component';


const routes: Routes = [
  {path:'',component:ImpressionListComponent},
  {path:'new',component:ImpressionNewComponent},
  {path:'editer/:id',component:ImpressionEditerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImpressionRoutingModule { }
