import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubjectsComponent } from './subjects.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component:SubjectsComponent
    }
    ])
  ]
})
export class SubjectsRoutingModule { }
