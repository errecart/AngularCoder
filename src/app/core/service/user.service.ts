import { Injectable } from '@angular/core';
import { User, createUserData, updateUserData } from '../models';
import { BehaviorSubject, Observable, Subject, delay, of, take } from 'rxjs';

const userView: Observable<User[]> = of([
  {
    id:1,
    name: 'Juan',
    lastname:'Molina',
    email: 'some@gmail.com'
  },
  {
    id:2,
    name: 'Lucas',
    lastname:'Gomez',
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

  loadUsers(): void{
    userView.subscribe({
      next: (usersFromViews) => this.SubUsers$.next(usersFromViews)
    })
  }

  getUsers(): Observable<User[]>{
    return this.users$
  }


  createUser(user: createUserData): void {
    this.users$.pipe(take(1)).subscribe({
      next:(array1) =>{
        this.SubUsers$.next([...array1, {...user, id: array1.length + 1}]);
      }
    })
  }

  updateUserById(id: number, newData: updateUserData): void{
    this.users$.pipe(take(1)).subscribe({
      next:(array1) =>{
        this.SubUsers$.next(
          array1.map((user)=> user.id === id ? {...user,...newData}: user)
        )
      }
    })
  }


  deleteUserById(id: number): void {
    this.SubUsers$.pipe(take(1)).subscribe({
      next: (array1) => {
        this.SubUsers$.next(array1.filter((user) => user.id !== id));
      },
    });
  }

} 

  


