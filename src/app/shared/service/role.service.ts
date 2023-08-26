import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAuthRole } from 'src/app/store/auth/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  public isAdmin$: Observable<any>

  constructor(private store: Store){
    this.isAdmin$ = this.store.select(selectAuthRole)
  }
}
