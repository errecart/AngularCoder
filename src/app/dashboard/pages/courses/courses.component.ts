import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { courses } from 'src/app/core/models';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/dashboard/pages/courses/courses.service';
import { NotificationService } from 'src/app/core/service/notification.service';
import { CoursesFormComponent } from './components/courses-form/courses-form.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})

export class CoursesComponent implements OnInit {

  public data$: Observable<courses[]>

  constructor(
    private matDialog: MatDialog,
    private coursesService: CoursesService,
    private notification: NotificationService
    ){
      this.data$ = this.coursesService.getCourses()
    }
  ngOnInit(): void {
    this.coursesService.loadCourses()
    this.coursesService.getCourses().subscribe({})
  }

  displayedColumns: string[] = ['id', 'name', 'schedule', 'action'];

  createCourses(): void{
    this.matDialog.open(CoursesFormComponent).afterClosed().subscribe({
      next: (value)=>{
        if(value){
          this.coursesService.inscriptCourse({
            name:value.name,
            schedule: value.schedule
          });
          this.notification.showSuccess('se cargaro el curso exitosamente')
        }else {
          this.notification.showError('Se a cancelado la inscripcion')
        }
      }
    })
  }

  delete(id: number): void{
    this.coursesService.deleteById(id)
  }

  edit(courseEdit: courses): void{
    const dialogRef = this.matDialog.open(CoursesFormComponent, {
      data: courseEdit
    })
    dialogRef.afterClosed().subscribe({
      next: (dataUpdate)=>{
        if(dataUpdate){
          this.coursesService.updateCourseById(courseEdit.id, dataUpdate)
        }
      }
    });
  }


}


