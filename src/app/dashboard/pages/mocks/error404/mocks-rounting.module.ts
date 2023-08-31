import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error404.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: Error404Component
    },
    ])
  ],
  exports:[
    RouterModule
  ]
})
export class ErrorRoutingModule { }