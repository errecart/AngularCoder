import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take } from 'rxjs';

import { NotificationService } from '../core/service/notification.service';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Loginload } from './models';
import { Store } from '@ngrx/store';
import { authAction } from '../store/auth/auth.actions';
import { student } from '../dashboard/pages/students/models/indexStu';
import { selectAuthStudent } from '../store/auth/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private _authstudent$ = new BehaviorSubject<student | null>(null);
  // public authstudent$ = this._authstudent$.asObservable();

  public authstudent$ = this.store.select(selectAuthStudent);

  constructor(
    private notification: NotificationService,
    private router: Router,
    private httpClient: HttpClient,
    private store: Store
    ) {}


  isAuthenticated(): Observable<boolean> {
    return this.httpClient.get<student[]>('http://localhost:3000/students', {
      params:{
        token: localStorage.getItem('token') || '',
      }
    }).pipe(
      map((result) =>{
        return !!result.length
      })
    )
  }

  login(payload: Loginload): void {
    this.httpClient.get<student[]>('http://localhost:3000/students', {
      params:{
        email: payload.email || '',
        password: payload.password || '',
      }
    }).subscribe({
      next:(resp) =>{
        if(resp.length){
          const authStudent = resp[0]
          // this._authstudent$.next(authStudent)
          this.store.dispatch(authAction.setAuthStudent({data: authStudent}))
          this.router.navigate(['/dashboard']);
          localStorage.setItem('token',authStudent.token)
        }else{
          this.notification.showError('email or password invalid, you cant pass');
          // this._authstudent$.next(null);
          this.store.dispatch(authAction.setAuthStudent({data: null}))
        }
      },
      error: (error)=>{
        if(error instanceof HttpErrorResponse){
          if( error.status == 500){
            this.notification.showError('some error happend')
          }
        }
      }
    });
  }

  public logOut():void{
    this.store.dispatch(authAction.setAuthStudent({data:null}))
  }
}
