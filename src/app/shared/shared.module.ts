import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {RouterModule} from "@angular/router";
import { SpinnerComponent } from './spinner/spinner.component';
import { MenuConnectedComponent } from './menu/menu-connected/menu-connected.component';
import { MenuNotConnectedComponent } from './menu/menu-not-connected/menu-not-connected.component';



@NgModule({
    declarations: [MenuComponent, SpinnerComponent, MenuConnectedComponent, MenuNotConnectedComponent ],
    exports: [
        MenuComponent,
        SpinnerComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
