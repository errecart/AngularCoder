import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { User } from '../core/models';
import { NotificationService } from '../core/service/notification.service';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Loginload } from './models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authUser$ = new BehaviorSubject<User | null>(null);
  public authUser$ = this._authUser$.asObservable();

  constructor(
    private notification: NotificationService,
    private router: Router,
    private httpClient: HttpClient
    ) {}


  isAuthenticated(): Observable<boolean> {
    // return this.authUser$.pipe(
    //   take(1),
    //   map((user) => !!user),
    // );
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
          this._authUser$.next(resp[0])
          this.router.navigate(['/dashboard']);
        }else{
          this.notification.showError('email or password invalid, you cant pass');
          this.router.navigate([null]);
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


}
