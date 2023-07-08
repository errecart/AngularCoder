import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';


interface userModel {
  name:FormControl<string | null>;
  lastName:FormControl<string | null>;
  email:FormControl<string | null>;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nameControl = new FormControl('',[Validators.required]);  
  lastNameControl = new FormControl('',[Validators.required]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);

  formModel: FormGroup<userModel> = new FormGroup({
    name: this.nameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
  });

  

}
