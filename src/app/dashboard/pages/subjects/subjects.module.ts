import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableSubjectComponent } from './components/table-subject/table-subject.component';
import { FormSubjectsComponent } from './components/form-subjects/form-subjects.component';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectDetailsComponent } from './components/subject-details/subject-details.component'




@NgModule({
  declarations: [
    SubjectsComponent,
    TableSubjectComponent,
    FormSubjectsComponent,
    SubjectDetailsComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    SubjectsRoutingModule
  ],
  exports:[
    SubjectsComponent
  ]
})
export class SubjectsModule { }
