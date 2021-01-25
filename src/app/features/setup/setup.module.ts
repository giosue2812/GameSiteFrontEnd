import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupRoutingModule } from './setup-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { SetupEditComponent } from './setup-edit/setup-edit.component';
import { SetupGenreComponent } from './setup-edit/setup-genre/setup-genre.component';
import { SetupEditeurComponent } from './setup-edit/setup-editeur/setup-editeur.component';
import { SetupPlatformComponent } from './setup-edit/setup-platform/setup-platform.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { SetupUserComponent } from './setup-edit/setup-user/setup-user.component';
import { SetupUserEditComponent } from './setup-edit/setup-user-edit/setup-user-edit.component';
@NgModule({
  declarations: [ SetupEditComponent, SetupGenreComponent, SetupEditeurComponent, SetupPlatformComponent, SetupUserComponent, SetupUserEditComponent],
    imports: [
        CommonModule,
        SetupRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        NgbPaginationModule
    ]
})
export class SetupModule { }
