import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { ToolbarComponent } from './layouts/toolbar/toolbar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    NavBarComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    SharedModule,
    RouterModule,

  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
