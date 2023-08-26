import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionComponent } from './inscription.component';
import { InscriptionRoutingModule } from './inscription-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormInsciptionComponent } from './components/form-insciption/form-insciption.component';



@NgModule({
  declarations: [
    InscriptionComponent,
    FormInsciptionComponent
  ],
  imports: [
    CommonModule,
    InscriptionRoutingModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    InscriptionComponent
  ]
})
export class InscriptionModule { }
