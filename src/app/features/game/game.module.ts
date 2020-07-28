import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { GameListComponent } from './game-list/game-list.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [GameListComponent, GameEditComponent],
    imports: [
        CommonModule,
        GameRoutingModule,
        FormsModule
    ]
})
export class GameModule { }
