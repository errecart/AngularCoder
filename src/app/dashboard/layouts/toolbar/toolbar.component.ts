import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { selectAuthRole } from 'src/app/store/auth/auth.selector';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  public role: Observable<'admin' | 'student' | undefined>

  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store
  ){
    this.role = this.store.select(selectAuthRole)
  }

  logOut():void{
    this.authService.logOut()
    this.router.navigate(['auth','login'], {})
  }
}
