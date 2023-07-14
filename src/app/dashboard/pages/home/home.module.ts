import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    HomeComponent,
    FormDialogComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
