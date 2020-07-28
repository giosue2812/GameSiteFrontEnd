import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";


const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'game',loadChildren:()=> import('../app/features/game/game.module').then(mod=>mod.GameModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
