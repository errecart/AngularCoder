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
import { CoursesModule } from './pages/courses/courses.module';
import { StudentsModule } from './pages/students/students.module';
import { SubjectsModule } from './pages/subjects/subjects.module';


@NgModule({
  declarations: [
    DashboardComponent,
    NavBarComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    SharedModule,
    RouterModule,
    CoursesModule,
    StudentsModule,
    SubjectsModule

  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
