import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { subject } from 'src/app/core/models';

interface subjectModel {
  name:FormControl<string | null>;
  timeW:FormControl<number | null>;
  price:FormControl<number | null>;
}

@Component({
  selector: 'app-form-subjects',
  templateUrl: './form-subjects.component.html',
  styleUrls: ['./form-subjects.component.css']
})
export class FormSubjectsComponent {
    editSubject?: subject
    nameControl = new FormControl<string | null>('',[Validators.required]);
    timeWControl = new FormControl<number | null>(null,[Validators.required]);
    priceControl = new FormControl<number | null>(null,[Validators.required]);

    formSModel: FormGroup<subjectModel> = new FormGroup({
      name: this.nameControl,
      timeW: this.timeWControl,
      price: this.priceControl
    })

    constructor(
      private dialogRef: MatDialogRef<FormSubjectsComponent>,
      @Inject(MAT_DIALOG_DATA) private data?: subject
    ){
      if(this.data){
        this.editSubject = this.data
        this.nameControl.setValue(this.data.name)
        this.timeWControl.setValue(this.data.timeW)
        this.priceControl.setValue(this.data.price)
      }
    }

    submit(): void{
      if(this.formSModel.invalid){
        this.formSModel.markAllAsTouched()
      }else{
        this.dialogRef.close(this.formSModel.value)
      }
    }
}
