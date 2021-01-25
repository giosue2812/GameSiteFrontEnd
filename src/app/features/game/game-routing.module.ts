import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameListComponent} from "./game-list/game-list.component";
import {GameEditComponent} from './game-edit/game-edit.component';
import {GameNewComponent} from './game-new/game-new.component';
import {GameDetailComponent} from './game-detail/game-detail.component';


const routes: Routes = [
  {path:'',component:GameListComponent},
  {path:'edit',component:GameEditComponent},
  {path:'edit/:id',component: GameEditComponent},
  {path:'new',component:GameNewComponent},
  {path:'detail/:id',component:GameDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
