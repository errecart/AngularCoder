import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { TitleDirective } from './utils/directives/title.directive';
import { FullNamesPipe } from './utils/pipes/full-names.pipe';

@NgModule({
  declarations: [
    TitleDirective,
    FullNamesPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    TitleDirective,
    FullNamesPipe,
    MatListModule
  ]
})
export class SharedModule { }
