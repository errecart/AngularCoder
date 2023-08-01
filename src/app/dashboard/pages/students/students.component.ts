import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';
import { User } from 'src/app/core/models';
import { StudentService } from './student.service';
import { NotificationService } from 'src/app/core/service/notification.service';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  public student: Observable<User[]>

  constructor(
    private matDialog: MatDialog,
    private studentService: StudentService,
    private notification: NotificationService
  ){
    this.studentService.loadStudent()
    this.student = this.studentService.getStudent().pipe(
      map((value)=>value.map((student)=>({...student, lastname: student.lastname.toUpperCase()})))
    )
  }

  createStudent():void{
    this.matDialog.open(FormComponent).afterClosed().subscribe({
      next:(value) =>{
        if(value){
          this.studentService.createStudent({
            name: value.name,
            email: value.email,
            age: value.age,
            lastname: value.lastname,
          })
        }else{
          this.notification.showError('Se a cancelado la inscripcion')
        }
      }
    })
  }

  onEditStudent(studentEdit: User): void{
    const dialogRef = this.matDialog.open(FormComponent, {
      data: studentEdit
    })
    dialogRef.afterClosed().subscribe({
      next: (dataUpdate)=>{
        if(dataUpdate){
          this.studentService.updateStudentById(studentEdit.id, dataUpdate)
        }
      }
    });
  };

  onDeleteStudent(studentToDelete: User): void{
    if(confirm(`Are you sure you want to eliminate ${studentToDelete.name}`)){
        this.studentService.deleteStudentById(studentToDelete.id)
      }
  };


}
