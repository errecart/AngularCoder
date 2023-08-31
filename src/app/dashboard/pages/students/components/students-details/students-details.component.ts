import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../student.service';
import { student } from '../../models/indexStu';


@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private studentService: StudentService,
  ){}

  studentDetail: student[] = []
  studentId = this.activateRoute.snapshot.params['id']
  
  ngOnInit(): void {
    if(!Number(this.studentId)){
      this.router.navigate(['../../../mocks/error404']);
    }else{
      this.studentService.getStudentById(this.studentId).subscribe({
        next:(data) => this.studentDetail = data
      })
    }
  }
}
