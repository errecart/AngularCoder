import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, mergeMap, take } from 'rxjs';
import { enviroment } from 'src/enviroments/envirotent';
import { enrolled } from './model/indexEn';

@Injectable({
  providedIn: 'root'
})
export class EnrolledService {

  private _enrolled$ = new BehaviorSubject<enrolled[]>([])
  private enrolled$ = this._enrolled$.asObservable();

  constructor(private httpClient:HttpClient) { }

  deleteEnrolledById(id:number):void{
    this.httpClient.delete(enviroment.baseApiUrl + '/enrolled/' + id)
    .pipe(
      mergeMap(() => this.enrolled$.pipe(
        take(1), 
        map((arrayA) => arrayA.filter((subId)=> subId.id !== id)
        )
      )
      )
    ).subscribe({
      next: (arrayAct)=> this._enrolled$.next(arrayAct)
    })
  }
}
