import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { CoursesFormComponent } from './components/courses-form/courses-form.component';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatDialogModule,
    CoursesRoutingModule
  ],
  exports:[
    CoursesComponent,
  ]
})
export class CoursesModule { }
