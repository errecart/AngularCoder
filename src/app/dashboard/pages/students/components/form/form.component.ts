import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/core/models';

interface StudentModel {
  name:FormControl<string | null>;
  lastname:FormControl<string | null>;
  age:FormControl<number | null>;
  password:FormControl<string| null>;
  email:FormControl<string | null>;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  editStudent?: User
  nameControl = new FormControl<string | null>('',[Validators.required]);  
  lastnameControl = new FormControl<string | null>('',[Validators.required]);
  ageControl = new FormControl<number | null>(null,[Validators.required]);
  passwordControl = new FormControl<string | null>('',[Validators.required]);
  emailControl = new FormControl<string | null>('', [Validators.required, Validators.email]);

  formModel: FormGroup<StudentModel> = new FormGroup({
    name: this.nameControl,
    lastname: this.lastnameControl,
    age: this.ageControl,
    password: this.passwordControl,
    email: this.emailControl,
  });

  constructor(
    private dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: User,
    ){
      if(this.data){
        this.editStudent = this.data
        this.nameControl.setValue(this.data.name)
        this.lastnameControl.setValue(this.data.lastname)
        this.passwordControl.setValue(this.data.password)
        this.ageControl.setValue(this.data.age)
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


