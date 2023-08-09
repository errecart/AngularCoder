import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, mergeMap,take } from 'rxjs';
import { User, createUserData, updateUserData } from 'src/app/dashboard/pages/models';
import { NotificationService } from 'src/app/core/service/notification.service';
import { random } from 'src/app/shared/utils/helps';
import { enviroment } from 'src/enviroments/envirotent';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _users$ = new BehaviorSubject<User[]>([]);
  private users$ = this._users$.asObservable();

  constructor(
    private httpClient: HttpClient,
    private notification: NotificationService
    ) {}

  loadStudent(): void{
    this.httpClient.get<User[]>(enviroment.baseApiUrl + '/students').subscribe({
      next:(resp) => {
        this._users$.next(resp);
      },
      error:()=>{
        this.notification.showError('Error loading the students')
      }
    })
  }

  getStudent(): Observable<User[]>{
    return this.users$
  }

  createStudent(student: createUserData): void {
    const token = random(10)
      this.httpClient.post<User>(enviroment.baseApiUrl + '/students',{...student, token})
        .pipe(
          mergeMap((studentCreate) => this.users$.pipe(
          take(1),
          map(
            (arrayActual) => [...arrayActual, studentCreate])
          )
          )
      ).subscribe({
        next: (arrayActualizado) => {
          this._users$.next(arrayActualizado);
        }
      })
}

  updateStudentById(id: number, newArray: updateUserData): void{
    this.httpClient.put(enviroment.baseApiUrl + '/students/' + id, newArray).subscribe({
      next: () => this.loadStudent(),
    })
  }

  deleteStudentById(id: number): void {
    this.httpClient.delete(enviroment.baseApiUrl + '/students/' + id)
    .pipe(
      mergeMap(() => this.users$.pipe(
        take(1), 
        map((arrayA) => arrayA.filter((sId)=> sId.id !== id)
        )
      )
      )
    ).subscribe({
      next: (arrayAct)=> this._users$.next(arrayAct)
    })
    
  }

}
