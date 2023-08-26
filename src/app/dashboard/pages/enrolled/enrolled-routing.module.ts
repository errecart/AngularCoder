import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EnrolledComponent } from './enrolled.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: EnrolledComponent
    },
    ])
  ],
  exports:[
    RouterModule
  ]
})
export class EnrolledRoutingModule { }