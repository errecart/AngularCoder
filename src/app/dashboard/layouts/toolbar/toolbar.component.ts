import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private authService: AuthService
  ){}

  logOut():void{
    // this.authService.logOut()
    this.router.navigate(['auth','login'], {})
  }
}
