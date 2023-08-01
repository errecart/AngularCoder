import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take} from 'rxjs';
import { courses, coursesCreate, updateCourseData } from '../../../core/models';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  
  private _courses$ = new BehaviorSubject<courses[]>([]);
  private courses$ = this._courses$.asObservable()

  loadCourses(): void{
    this._courses$.next([
      {id: 1, name: 'HTML', schedule:"8:00 - 10:00"},
      {id: 2, name: 'CSS',schedule:"8:00 - 10:00"},
      {id: 3, name: 'JAVASCRIPT',schedule:"12:00 - 14:00"},
      {id: 4, name: 'REACT',schedule:"18:00 - 20:30"},
      {id: 5, name: 'ANGULAR',schedule:"18:00 - 20:30"},
      {id: 6, name: 'VUE.JS',schedule:"18:00 - 20:30"},
      {id: 7, name: 'PYTHON', schedule:"8:00 - 10:00"},

    ])
  }

  getCourses(): Observable<courses[]>{
    return this._courses$.asObservable()
  }

  inscriptCourse(course: coursesCreate): void{
    this.courses$.pipe(take(1)).subscribe({
      next: (c1) =>{
        this._courses$.next([...c1, {...course, id: c1.length + 1}])
      }
    });
  }

  deleteById(id: number): void{
    this._courses$.pipe(take(1)).subscribe({
      next: (c) =>{
        this._courses$.next(c.filter((co) => co.id !== id))
      }
    })
  }

  updateCourseById(id: number, newData: updateCourseData): void{
    this.courses$.pipe(take(1)).subscribe({
      next:(array1) =>{
        this._courses$.next(
          array1.map((course)=> course.id === id ? {...course,...newData}: course)
        )
      }
    })
  }

}