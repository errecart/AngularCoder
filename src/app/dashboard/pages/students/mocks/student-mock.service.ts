import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, of } from 'rxjs';
import { User } from 'src/app/dashboard/pages/models';

const studentView: Observable<User[]> = of([
  {
    id:1,
    name: 'FAKE',
    age: 789,
    lastname:'SOME',
    password:'loca',
    email: 'some@gmail.com'
  },
  {
    id:2,
    name: 'FAKE',
    lastname:'ELSE',
    age: 790,
    password:'loca',
    email: 'else@gmail.com'
  }
]).pipe(delay(1000))


@Injectable({
  providedIn: 'root'
})
export class StudentMockService {

  constructor() { }
  private SubUsers$ = new BehaviorSubject<User[]>([]);
  private users$ = this.SubUsers$.asObservable();

  loadStudent(): void{
    studentView.subscribe({
      next: (studentFromViews) => this.SubUsers$.next(studentFromViews)
    })
  }

  getStudent(): Observable<User[]>{
    return this.users$
  }
}
