import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentsDetailsComponent } from './components/students-details/students-details.component';
import { RouterModule } from '@angular/router';
import { StudentService } from './student.service';
import { StudentMockService } from './mocks/student-mock.service';




@NgModule({
  declarations: [
    StudentsComponent,
    FormComponent,
    TableComponent,
    StudentsDetailsComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    StudentsComponent
  ],
  providers:[
    {
      provide:StudentService,
      useClass:StudentMockService
    }
  ]
})
export class StudentsModule { }
