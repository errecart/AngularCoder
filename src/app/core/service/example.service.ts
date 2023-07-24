import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExampleService implements OnDestroy {

  public contador$ = new Observable<number>((obs) => {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      obs.next(count);
    }, 1000);

    return () => {
      clearInterval(interval);
      obs.complete();
    };
  });

  private destroy$ = new Subject<void>();

  contadorSubscripcion = this.contador$.subscribe();

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.contadorSubscripcion.unsubscribe();
  }
}
