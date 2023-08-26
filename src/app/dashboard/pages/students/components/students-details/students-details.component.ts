import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../student.service';
import { student } from '../../models/indexStu';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {
  studentDetails$: Observable<student>;
  
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ){
    let student = this.activateRoute.snapshot.params['id']
    this.studentDetails$ = this.studentService.getStudentById(student)
    console.log(this.studentDetails$);
    console.log(student);
    

    if(!Number(this.activateRoute.snapshot.params['id'])){
      this.router.navigate(['/error404']); 
    }  
  }
  

  ngOnInit(): void {
    // this.activateRoute.params.subscribe(params =>{
    //   this.studentId = params['id']
    //   this.studentService.getStudentById(this.studentId).subscribe(data=>{
    //     this.studentDetails$ = data
    //   })
    // })
  }
}
