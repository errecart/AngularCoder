import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { subject } from '../../models/indexSub';


interface subjectModel {
  name:FormControl<string | null>;
  timeW:FormControl<number | null>;
  price:FormControl<number | null>;
  description:FormControl<string | null>
  image: FormControl<string | null>
}

@Component({
  selector: 'app-form-subjects',
  templateUrl: './form-subjects.component.html',
  styleUrls: ['./form-subjects.component.css']
})
export class FormSubjectsComponent {
    editSubject?: subject
    nameControl = new FormControl<string | null>('',[Validators.required]);
    timeWControl = new FormControl<number | null>(null,[Validators.required, Validators.minLength(7)]);
    priceControl = new FormControl<number | null>(null,[Validators.required,Validators.min(10)]);
    descriptionControl = new FormControl<string | null>('',[Validators.required,])
    imageControl = new FormControl<string | null>('',[Validators.required])

    formSModel: FormGroup<subjectModel> = new FormGroup({
      name: this.nameControl,
      timeW: this.timeWControl,
      price: this.priceControl,
      description: this.descriptionControl,
      image: this.imageControl
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
        this.descriptionControl.setValue(this.data.description)
        this.imageControl.setValue(this.data.image)
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
