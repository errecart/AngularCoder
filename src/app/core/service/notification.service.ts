import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

interface CustomNotification{
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
  button?: 'confirmButtonText' & 'showCancelButton'
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
private notification$ = new Subject<CustomNotification>()


  constructor() { 
    this.notification$.subscribe({
      next:(myNotification) =>{
        Swal.fire(
          myNotification.title,
          myNotification.message,
          myNotification.type,
          )
      } 
    });
  }

  showSuccess(message:string,title = 'Completado'): void{
    this.notification$.next({
      type: 'success',
      message,
      title,
    })
  };

  showError(message:string,title = 'Cancelada'): void{
    this.notification$.next({
      type: 'error',
      message,
      title,
    });
  };

  showNotification(message:string,title = 'Opcion'): void{
    this.notification$.next({
      type: 'info',
      message,
      title,
      
    });
  };

}
