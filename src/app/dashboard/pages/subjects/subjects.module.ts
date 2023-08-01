import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableSubjectComponent } from './components/table-subject/table-subject.component';
import { FormSubjectsComponent } from './components/form-subjects/form-subjects.component';




@NgModule({
  declarations: [
    SubjectsComponent,
    TableSubjectComponent,
    FormSubjectsComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    SubjectsComponent
  ]
})
export class SubjectsModule { }
