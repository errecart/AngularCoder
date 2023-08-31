import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ErrorRoutingModule } from './mocks-rounting.module';



@NgModule({
  declarations: [
    Error404Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    ErrorRoutingModule
  ]
})
export class Error404Module { }
