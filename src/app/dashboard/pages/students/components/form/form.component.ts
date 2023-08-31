import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { student } from '../../models/indexStu';

// interface studentForm{
//   name: FormControl<string | null>
//   lastname: FormControl<string | null>
//   password: FormControl<string | null>
//   age: FormControl<number | null>
//   email: FormControl<string | null>
//   token: FormControl<string | null>
//   role: FormControl<'admin' | 'student'>
// }



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  editStudent?: student
  nameControl = new FormControl<string | null>('',[Validators.required,Validators.minLength(3)]);  
  lastnameControl = new FormControl<string | null>('',[Validators.required,Validators.minLength(5),Validators.maxLength(12)]);
  ageControl = new FormControl<number | null>(null,[Validators.required,Validators.min(15)]);
  passwordControl = new FormControl<string | null>('',[Validators.required,Validators.minLength(8),Validators.maxLength(16)]);
  emailControl = new FormControl<string | null>('', [Validators.required,Validators.email,Validators.minLength(10)]);
  roleControl = new FormControl<string| null>(null, [Validators.required]); 
  
  formModel = new FormGroup({
    name: this.nameControl,
    lastname: this.lastnameControl,
    age: this.ageControl,
    password: this.passwordControl,
    email: this.emailControl,
    role: this.roleControl
  });

  constructor(
    private dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: student,
    ){
      if(this.data){
        this.editStudent = this.data
        this.nameControl.setValue(this.data.name)
        this.lastnameControl.setValue(this.data.lastname)
        this.passwordControl.setValue(this.data.password)
        this.ageControl.setValue(this.data.age)
        this.emailControl.setValue(this.data.email)
        this.roleControl.setValue(this.data.role)
      }
  }


  submit(): void{
    if(this.formModel.invalid){
      this.formModel.markAllAsTouched()
    }else{
      const data: any = {
        ...this.formModel.value
      }
      if (this.editStudent) {
        data['token'] = this.editStudent.token;
      }
      this.dialogRef.close(this.formModel.value)
    }
  }

}


