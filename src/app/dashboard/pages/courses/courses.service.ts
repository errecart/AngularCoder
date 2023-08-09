import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, mergeMap, take} from 'rxjs';
import { courses, coursesCreate, updateCourseData } from '../models';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from 'src/app/core/service/notification.service';
import { enviroment } from 'src/enviroments/envirotent';
import { random } from 'src/app/shared/utils/helps';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  
  private _courses$ = new BehaviorSubject<courses[]>([]);
  private courses$ = this._courses$.asObservable()

    constructor(
    private httpClient: HttpClient,
    private notification: NotificationService
    ) {}

  loadCourses(): void{
    this.httpClient.get<courses[]>(enviroment.baseApiUrl + '/courses').subscribe({
      next:(resp)=>{
        this._courses$.next(resp)
      },
      error:()=>{
        this.notification.showError('Error loading the Courses')
      }
    })
  }

  getCourses(): Observable<courses[]>{
    return this._courses$.asObservable()
  }

  inscriptCourse(course: coursesCreate): void{
    const token = random(5)
    this.httpClient.post<courses>(enviroment.baseApiUrl + '/courses',{...course, token})
      .pipe(
        mergeMap((coursesCreate) => this.courses$.pipe(
        take(1),
        map(
            (arrayActual) => [...arrayActual, coursesCreate])
        )
        )
      ).subscribe({
        next: (arrayActualizado) => {
          this._courses$.next(arrayActualizado);
        }
      })
  }

  
  updateCourseById(id: number, newData: updateCourseData): void{
    this.httpClient.put(enviroment.baseApiUrl + '/courses/' + id, newData).subscribe({
      next: () => this.loadCourses(),
    })
    }



    deleteById(id: number): void{
      this.httpClient.delete(enviroment.baseApiUrl + '/courses/' + id)
      .pipe(
        mergeMap(() => this.courses$.pipe(
          take(1), 
          map((arrayC) => arrayC.filter((cId)=> cId.id !== id)
          )
        )
        )
      ).subscribe({
        next: (arrayAct)=> this._courses$.next(arrayAct)
      })
    }

}