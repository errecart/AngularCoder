import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, of, take } from 'rxjs';
import { User, createUserData, updateUserData } from 'src/app/core/models';

const studentView: Observable<User[]> = of([
  {
    id:1,
    name: 'Juan',
    age: 1,
    lastname:'Molina',
    email: 'some@gmail.com'
  },
  {
    id:2,
    name: 'Lucas',
    lastname:'Gomez',
    age: 1,
    email: 'else@gmail.com'
  }
]).pipe(delay(1000))

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private SubUsers$ = new BehaviorSubject<User[]>([]);
  private users$ = this.SubUsers$.asObservable();
  constructor() {}

  loadStudent(): void{
    studentView.subscribe({
      next: (studentFromViews) => this.SubUsers$.next(studentFromViews)
    })
  }

  getStudent(): Observable<User[]>{
    return this.users$
  }

  createStudent(student: createUserData): void {
    this.users$.pipe(take(1)).subscribe({
      next:(array1) =>{
        this.SubUsers$.next([...array1, {...student, id: array1.length + 1}]);
      }
    })
  }

  updateStudentById(id: number, newData: updateUserData): void{
    this.users$.pipe(take(1)).subscribe({
      next:(array1) =>{
        this.SubUsers$.next(
          array1.map((student)=> student.id === id ? {...student,...newData}: student)
        )
      }
    })
  }

  deleteStudentById(id: number): void {
    this.SubUsers$.pipe(take(1)).subscribe({
      next: (array1) => {
        this.SubUsers$.next(array1.filter((user) => user.id !== id));
      },
    });
  }

}
