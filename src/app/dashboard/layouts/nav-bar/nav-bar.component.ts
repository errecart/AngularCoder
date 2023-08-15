import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { User } from '../../pages/models';
import { AuthService } from 'src/app/auth/auth.service';
import { Store } from '@ngrx/store';
// import { selectAuthUser } from 'src/app/store/auth/auth.selector';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input()
  public drawer?: MatDrawer;

  // public authUser$: Observable<User | null> 

  constructor(
    private authService: AuthService,
    private store:Store
  ){
    // this.authUser$ = this.store.select(selectAuthUser)
  }
}
