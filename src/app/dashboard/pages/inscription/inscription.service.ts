import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, mergeMap, take } from 'rxjs';
import { CreateInscription, inscription } from './models/indexIns';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from 'src/app/core/service/notification.service';
import { enviroment } from 'src/enviroments/envirotent';
import { random } from 'src/app/shared/utils/helps';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private _inscription$ = new BehaviorSubject<inscription[]>([]);
  public inscription$ = this._inscription$.asObservable();

  constructor
  (private httpClient: HttpClient,
    private notification: NotificationService
  ) {}


  loadInscription(): void{
    this.httpClient.get<inscription[]>(enviroment.baseApiUrl + '/inscriptions').subscribe({
      next:(resp)=>{
        this._inscription$.next(resp)
      },
      error:()=>{
        this.notification.showError('Error loading the inscription')
      }
    })
  }

  getInscription(): Observable<inscription[]>{
    return this._inscription$.asObservable()
  }

  CreateInscription(ins: CreateInscription): void{
    this.httpClient.post<inscription>(enviroment.baseApiUrl + '/inscriptions',{...ins})
      .pipe(
        mergeMap((insCreate) => this.inscription$.pipe(
        take(1),
        map(
            (arrayActual) => [...arrayActual, insCreate])
        )
        )
      ).subscribe({
        next: (newArr) => {
          this._inscription$.next(newArr);
        }
      })
  }

  deleteById(id: number): void{
    this.httpClient.delete(enviroment.baseApiUrl + '/inscriptions/' + id)
    .pipe(
      mergeMap(() => this.inscription$.pipe(
        take(1), 
        map((arrayC) => arrayC.filter((cId)=> cId.id !== id)
        )
      )
      )
    ).subscribe({
      next: (arrayAct)=> this._inscription$.next(arrayAct)
    })
  }


}
