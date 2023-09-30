import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, mergeMap,take } from 'rxjs';
import { NotificationService } from 'src/app/core/service/notification.service';
import { random } from 'src/app/shared/utils/helps';
import { enviroment } from 'src/enviroments/enviroment';
import { createStudentData, student, updateStudentData } from './models/indexStu';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _students$ = new BehaviorSubject<student[]>([]);
  private students$ = this._students$.asObservable();

  constructor(
    private httpClient: HttpClient,
    private notification: NotificationService
    ) {}

  loadStudent(): void{
    this.httpClient.get<student[]>(enviroment.baseApiUrl + '/students').subscribe({
      next:(resp) => {
        this._students$.next(resp);
      },
      error:()=>{
        this.notification.showError('Error loading the students')
      }
    })
  }

  getStudent(): Observable<student[]>{
    return this.students$
  }

  getStudentById(id: number): Observable<student[]> {
    return this.httpClient.get<student[]>(enviroment.baseApiUrl + `/students?id=${id}`);
  }

  createStudent(student: createStudentData): void {
    const token = random(10)
      this.httpClient.post<student>(enviroment.baseApiUrl + '/students',{...student, token})
        .pipe(
          mergeMap((studentCreate) => this.students$.pipe(
          take(1),
          map(
            (arrayActual) => [...arrayActual, studentCreate])
          )
          )
      ).subscribe({
        next: (arrayActualizado) => {
          this._students$.next(arrayActualizado);
        }
      })
  }

  updateStudentById(id: number, newArray: updateStudentData): void{
    this.httpClient.put(enviroment.baseApiUrl + '/students/' + id, newArray).subscribe({
      next: () => this.loadStudent(),
    })
  }

  deleteStudentById(id: number): void {
    this.httpClient.delete(enviroment.baseApiUrl + '/students/' + id)
    .pipe(
      mergeMap(() => this.students$.pipe(
        take(1), 
        map((arrayA) => arrayA.filter((sId)=> sId.id !== id)
        )
      )
      )
    ).subscribe({
      next: (arrayAct)=> this._students$.next(arrayAct)
    })
  }

}
