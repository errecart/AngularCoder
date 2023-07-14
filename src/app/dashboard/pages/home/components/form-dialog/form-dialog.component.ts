import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../models';


interface userModel {
  name:FormControl<string | null>;
  lastname:FormControl<string | null>;
  email:FormControl<string | null>;
}
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent {
  nameControl = new FormControl<string | null>('',[Validators.required]);  
  lastnameControl = new FormControl<string | null>('',[Validators.required]);
  emailControl = new FormControl<string | null>('', [Validators.required, Validators.email]);

  formModel: FormGroup<userModel> = new FormGroup({
    name: this.nameControl,
    lastname: this.lastnameControl,
    email: this.emailControl,
  });

  constructor(
    private dialogRed: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: User,
    ){
      if(this.data){
        this.nameControl.setValue(this.data.name)
        this.lastnameControl.setValue(this.data.lastname)
        this.emailControl.setValue(this.data.email)
      }
  }

  submit(): void{
    if(this.formModel.invalid){
      this.formModel.markAllAsTouched()
    }else{
      this.dialogRed.close(this.formModel.value)
    }
  }

  // aplicar un validators para q name y lastName no use numeros

} 
