import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InscriptionComponent } from './inscription.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: InscriptionComponent
    },
    ])
  ],
  exports:[
    RouterModule
  ]
})
export class InscriptionRoutingModule { }
