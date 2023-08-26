import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/auth/auth.service';
import { Store } from '@ngrx/store';
import { selectAuthStudent } from 'src/app/store/auth/auth.selector';
import { student } from '../../pages/students/models/indexStu';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input()
  public drawer?: MatDrawer;

  public authstudent$: Observable<student | null> 

  constructor(
    private authService: AuthService,
    private store:Store
  ){
    this.authstudent$ = this.store.select(selectAuthStudent)
  }
}
