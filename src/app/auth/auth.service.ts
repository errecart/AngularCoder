import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { User } from '../dashboard/pages/models';
import { NotificationService } from '../core/service/notification.service';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Loginload } from './models';
import { Store } from '@ngrx/store';
// import { authAction } from '../store/auth/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authUser$ = new BehaviorSubject<User | null>(null);
  public authUser$ = this._authUser$.asObservable();

  constructor(
    private notification: NotificationService,
    private router: Router,
    private httpClient: HttpClient,
    private store: Store
    ) {}


  isAuthenticated(): Observable<boolean> {
    return this.httpClient.get<User[]>('http://localhost:3000/students', {
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
    this.httpClient.get<User[]>('http://localhost:3000/students', {
      params:{
        email: payload.email || '',
        password: payload.password || '',
      }
    }).subscribe({
      next:(resp) =>{
        if(resp.length){
          const authStudent = resp[0]
          this._authUser$.next(authStudent)
          // this.store.dispatch(authAction.setAuthUser({data: authStudent}))
          this.router.navigate(['/dashboard']);
          localStorage.setItem('token',authStudent.token)
        }else{
          this.notification.showError('email or password invalid, you cant pass');
          this._authUser$.next(null);
          // this.store.dispatch(authAction.setAuthUser({data: null}))
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

  // public logOut():void{
  //   this.store.dispatch(authAction.setAuthUser({data:null}))
  // }


}
