import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentsDetailsComponent } from './components/students-details/students-details.component';
import { RouterModule } from '@angular/router';
import { StudentsRoutingModule } from './students-routing.module';

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
    RouterModule,
    StudentsRoutingModule,

  ],
  exports:[
    StudentsComponent
  ]
})
export class StudentsModule {}
