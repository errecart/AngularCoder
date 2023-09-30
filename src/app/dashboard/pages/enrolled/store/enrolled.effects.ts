import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, take } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { EnrolledActions } from './enrolled.actions';
import { HttpClient } from '@angular/common/http';
import { createEnrolledData, enrolled, enrolledSyI } from '../model/indexEn';
import { enviroment } from 'src/enviroments/enviroment';
import { InscriptionService } from '../../inscription/inscription.service';
import { inscription } from '../../inscription/models/indexIns';
import { subject } from '../../subjects/models/indexSub';
import { Store } from '@ngrx/store';


@Injectable()
export class EnrolledEffects {

  loadEnrolleds$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(EnrolledActions.loadEnrolleds),
      concatMap(() =>
        this.getEnrolledDB().pipe(
          map(data =>EnrolledActions.loadEnrolledsSuccess({ data })),
          catchError(error => of(EnrolledActions.loadEnrolledsFailure({ error }))))
      )
    );
  });

  loadInscriptionOptions$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(EnrolledActions.loadInscriptionsOptions),
      concatMap(() =>
        this.getInscriptionOptions().pipe(
          map(data =>EnrolledActions.loadInscriptionsOptionsSuccess({ data })),
          catchError(error => of(EnrolledActions.loadInscriptionsOptionsFailure({ error }))))
      )
    );
  });

  loadSubjectOptions$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(EnrolledActions.loadSubjectOptions),
      concatMap(() =>
        this.getSubjectsOptions().pipe(
          map(data =>EnrolledActions.loadSubjectsOptionsSuccess({ data })),
          catchError(error => of(EnrolledActions.loadInscriptionsOptionsFailure({ error }))))
      )
    );
  });

  createEnrolled$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(EnrolledActions.createEnrolled),
      concatMap((action) =>
        this.createEnrolled(action.data).pipe(
          map(data =>EnrolledActions.createEnrolledSuccess({ data })),
          catchError(error => of(EnrolledActions.createEnrolledFailure({ error }))))
      )
    );
  });

  createEnrolledSucces$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(EnrolledActions.createEnrolledSuccess),
      map(()=> this.store.dispatch(EnrolledActions.loadEnrolleds()))
    );
  }, {dispatch: false});



  constructor(private actions$: Actions,private httpClient: HttpClient, private inscirptionService: InscriptionService,private store: Store) {}

  private getEnrolledDB():Observable<enrolledSyI[]>{
    return this.httpClient.get<enrolledSyI[]>(enviroment.baseApiUrl + '/enrolled?_expand=subject&_expand=inscription')
  }

  private getInscriptionOptions():Observable<inscription[]>{
    return this.httpClient.get<inscription[]>(enviroment.baseApiUrl + '/inscriptions')
  }

  private getSubjectsOptions():Observable<subject[]>{
    return this.httpClient.get<subject[]>(enviroment.baseApiUrl + '/subjects')
  }

  private createEnrolled(data: createEnrolledData): Observable<enrolled>{
    return this.httpClient.post<enrolled>(enviroment.baseApiUrl + '/enrolled', data)
  }
}
