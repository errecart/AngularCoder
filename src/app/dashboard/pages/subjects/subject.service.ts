import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, mergeMap, take } from 'rxjs';
import { NotificationService } from 'src/app/core/service/notification.service';
import { random } from 'src/app/shared/utils/helps';
import { enviroment } from 'src/enviroments/envirotent';
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

  updateSubjectById(id:number, newData:updateSubjectData): void{
    this.httpClient.post<subject>(enviroment.baseApiUrl + '/subjects/' + id, newData).subscribe({
      next:()=> this.loadSubject()
    })
  }

  deleteSubjectById(id:number):void{
    this.httpClient.delete(enviroment.baseApiUrl + '/students/' + id)
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

  getSubjectByCategoryId(categoryId: number): Observable<subject[]> {
    return this.httpClient.get<subject[]>(enviroment.baseApiUrl + `/subjects?categoryId=${categoryId}`)
  }

  
}
