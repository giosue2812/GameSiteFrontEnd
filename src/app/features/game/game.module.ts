import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { GameListComponent } from './game-list/game-list.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {SharedModule} from '../../shared/shared.module';
import { GameNewComponent } from './game-new/game-new.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { GameDetailComponent } from './game-detail/game-detail.component';


@NgModule({
  declarations: [GameListComponent, GameEditComponent, GameNewComponent, GameDetailComponent],
    imports: [
        CommonModule,
        GameRoutingModule,
        FormsModule,
        YouTubePlayerModule,
        ReactiveFormsModule,
        SharedModule,
        NgbPaginationModule
    ]
})
export class GameModule { }
