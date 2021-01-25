import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListEnvieRoutingModule } from './list-envie-routing.module';
import { ListEnvieComponent } from './list-envie/list-envie.component';
import {SharedModule} from '../../shared/shared.module';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ListEnvieComponent],
  imports: [
    CommonModule,
    ListEnvieRoutingModule,
    SharedModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ListEnvieModule { }
