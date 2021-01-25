import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImpressionRoutingModule } from './impression-routing.module';
import { ImpressionListComponent } from './impression-list/impression-list.component';
import { ImpressionNewComponent } from './impression-new/impression-new.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { ImpressionEditerComponent } from './impression-editer/impression-editer.component';



@NgModule({
  declarations: [ImpressionListComponent, ImpressionNewComponent, ImpressionEditerComponent],
  imports: [
    CommonModule,
    ImpressionRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgbPaginationModule
  ]
})
export class ImpressionModule { }
