import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubjectsComponent } from './subjects.component';
import { SubjectDetailsComponent } from './components/subject-details/subject-details.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component:SubjectsComponent
    },
    {
      path:':id',
      component:SubjectDetailsComponent
    },
    ])
  ],
  exports:[
    RouterModule
  ]
})
export class SubjectsRoutingModule { }
