import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentsDetailsComponent } from './components/students-details/students-details.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: StudentsComponent
    },
    {
        path:':id',
        component:StudentsDetailsComponent
    },
    ])
  ],
  exports:[
    RouterModule
  ]
})
export class StudentsRoutingModule { }
