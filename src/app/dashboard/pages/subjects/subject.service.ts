import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, of, take } from 'rxjs';
import { subject, subjectCreate, updateSubjectData } from 'src/app/core/models';

const subjectView: Observable<subject[]> = of([
  {
    id:1,
    name: 'Matematica Avanada',
    timeW:12,
    price: 75.00

  },
  {
    id:2,
    name: 'Fisica 1',
    timeW:8,
    price: 50.00

  }
]).pipe(delay(1000))

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private _subject$ = new BehaviorSubject<subject[]>([])
  private subject$ = this._subject$.asObservable();

  loadSubject(): void{
    subjectView.subscribe({
      next:(subjectFormView) => this._subject$.next(subjectFormView)
    });
  }

  getSubject(): Observable<subject[]>{
    return this.subject$
  }

  createSubject(subject: subjectCreate): void{
    this.subject$.pipe(take(1)).subscribe({
      next:(sub)=>{
        this._subject$.next([...sub,{...subject, id: sub.length +1 }]);
      }
    })
  }

  updateSubjectById(id:number, newData:updateSubjectData): void{
    this.subject$.pipe(take(1)).subscribe({
      next:(sub)=>{
        this._subject$.next(
          sub.map((sub1)=>sub1.id === id ? {...sub1,...newData}:sub1)
        )
      }
    });
  }

  deleteSubjectById(id:number):void{
    this._subject$.pipe(take(1)).subscribe({
      next:(subArr) =>{
        this._subject$.next(subArr.filter((sub)=>sub.id !==id))
      }
    })
  }

  
}
