import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { courses } from 'src/app/dashboard/pages/models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface coursesModel {
  name:FormControl<string | null>;
  schedule:FormControl<string | null>;
}

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.css']
})
export class CoursesFormComponent {
  editCourse?: courses
  nameControl = new FormControl<string | null>('',[Validators.required]);  
  scheduleControl = new FormControl<string | null>('',[Validators.required]);

  formCourses: FormGroup<coursesModel> = new FormGroup({
    name: this.nameControl,
    schedule: this.scheduleControl
  })

  constructor(
    private dialogRed: MatDialogRef<CoursesFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: courses,
    ){
      if(this.data){
        this.editCourse = this.data
        this.nameControl.setValue(this.data.name)
        this.scheduleControl.setValue(this.data.schedule)
      }
  }

    submit(): void{
      if(this.formCourses.invalid){
        this.formCourses.markAllAsTouched()
      }else{
        this.dialogRed.close(this.formCourses.value)
      }
    }
}
