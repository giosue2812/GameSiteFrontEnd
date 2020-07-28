import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameListComponent} from "./game-list/game-list.component";
import {GameEditComponent} from './game-edit/game-edit.component';


const routes: Routes = [
  {path:'',component:GameListComponent},
  {path:'edit',component:GameEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
