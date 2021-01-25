import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {IsLoggedGuard} from './core/guard/is-logged.guard';


const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'game',canActivate:[IsLoggedGuard],loadChildren:()=> import('../app/features/game/game.module').then(mod=>mod.GameModule)},
  {path: 'setup',canActivate:[IsLoggedGuard],loadChildren:()=> import('../app/features/setup/setup.module').then(mod=>mod.SetupModule)},
  {path: 'listEnvie',canActivate:[IsLoggedGuard],loadChildren:()=> import('../app/features/list-envie/list-envie.module').then(mod=>mod.ListEnvieModule)},
  {path: 'impression',canActivate:[IsLoggedGuard],loadChildren:()=> import('../app/features/impression/impression.module').then(mod=>mod.ImpressionModule)},
  {path: 'connexion',loadChildren:()=> import('../app/features/connexion/connexion.module').then(mod=>mod.ConnexionModule)},
  {path: '**',redirectTo:'',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
