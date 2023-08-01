import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent {
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router
  ){
    if(!Number(this.activateRoute.snapshot.params['id'])){
      this.router.navigate(['/error404']); 
    }
  }
}
