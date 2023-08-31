import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from '../../subject.service';
import { subject } from '../../models/indexSub';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private subjectService: SubjectService
  ){}
  subjectDetail: subject[]= []
  displayedColumns = ['id', 'name','description']
  subjectId = this.activateRoute.snapshot.params['id']


  ngOnInit(): void {
    if(!Number(this.subjectId)){
      this.router.navigate(['../../../mocks/error404']);
    }else{
      this.subjectService.getSubjectById(this.subjectId).subscribe({
        next:(data) => this.subjectDetail = data
      })
    }
  }
}
