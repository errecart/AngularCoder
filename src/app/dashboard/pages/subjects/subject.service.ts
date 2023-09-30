import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, mergeMap, take } from 'rxjs';
import { NotificationService } from 'src/app/core/service/notification.service';
import { random } from 'src/app/shared/utils/helps';
import { enviroment } from 'src/enviroments/enviroment';
import { subject, subjectCreate, updateSubjectData } from './models/indexSub';



@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private _subject$ = new BehaviorSubject<subject[]>([])
  private subject$ = this._subject$.asObservable();

    constructor(
    private httpClient: HttpClient,
    private notification: NotificationService,

    ) {}

  loadSubject(): void{
    this.httpClient.get<subject[]>(enviroment.baseApiUrl + '/subjects').subscribe({
      next: (resp)=>{
        this._subject$.next(resp)
      },
      error:()=>{
        this.notification.showError('Error loading the Subjects')
      }
    })
  }

  getSubject(): Observable<subject[]>{
    return this.subject$
  }

  getSubjectById(id: number): Observable<subject[]> {
    return this.httpClient.get<subject[]>(enviroment.baseApiUrl + `/subjects?id=${id}`);
  }


  createSubject(subject: subjectCreate): void{
    const token = random(5)
    this.httpClient.post<subject>(enviroment.baseApiUrl + '/subjects/',{...subject, token})
    .pipe(
      mergeMap((subjectCreate) => this.subject$.pipe(
        take(1),
        map(
          (arrayActual) => [...arrayActual, subjectCreate]
        )
      ))
    ).subscribe({
      next:(newArray)=>{
        this._subject$.next(newArray)
      }
    })
  }

  updateSubjectById(id: number, newArray: updateSubjectData): void{
    this.httpClient.put(enviroment.baseApiUrl + '/subjects/' + id, newArray).subscribe({
      next: () => this.loadSubject(),
    })
  }

  deleteSubjectById(id:number):void{
    this.httpClient.delete(enviroment.baseApiUrl + '/subjects/' + id)
    .pipe(
      mergeMap(() => this.subject$.pipe(
        take(1), 
        map((arrayA) => arrayA.filter((subId)=> subId.id !== id)
        )
      )
      )
    ).subscribe({
      next: (arrayAct)=> this._subject$.next(arrayAct)
    })
  }

}
