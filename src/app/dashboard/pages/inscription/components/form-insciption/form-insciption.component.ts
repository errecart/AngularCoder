import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { inscription } from '../../models/indexIns';

interface InscriptionModel {
  name:FormControl<string | null>;
  lastname:FormControl<string | null>;
  email:FormControl<string | null>;

}

@Component({
  selector: 'app-form-insciption',
  templateUrl: './form-insciption.component.html',
  styleUrls: ['./form-insciption.component.css']
})
export class FormInsciptionComponent {
  editInscription?: inscription
  nameControl = new FormControl<string | null>('',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]);  
  lastnameControl = new FormControl<string | null>('',[Validators.required,Validators.minLength(5),Validators.maxLength(12)]);
  emailControl = new FormControl<string | null>('',[Validators.required,Validators.email,Validators.email,Validators.minLength(10)]) 

  formModel: FormGroup<InscriptionModel> = new FormGroup({
    name: this.nameControl,
    lastname: this.lastnameControl,
    email: this.emailControl,
  });

  constructor(
    private dialogRef: MatDialogRef<FormInsciptionComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: inscription
    ){
    if(this.data){
      this.editInscription = this.data
      this.nameControl.setValue(this.data.name)
      this.lastnameControl.setValue(this.data.lastname)
      this.emailControl.setValue(this.data.email)
    }
  }

  submit(): void{
    if(this.formModel.invalid){
      this.formModel.markAllAsTouched()
    }else{
      this.dialogRef.close(this.formModel.value)
    }
  }
}
