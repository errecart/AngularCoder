import { Component, EventEmitter, Input, Output } from '@angular/core';
import { subject } from '../../models/indexSub';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAuthRole } from 'src/app/store/auth/auth.selector';

export interface PeriodicElement {
  id: number;
  name: string;
  timeW: number;
  price: number;
}
@Component({
  selector: 'app-table-subject',
  templateUrl: './table-subject.component.html',
  styleUrls: ['./table-subject.component.css']
})
export class TableSubjectComponent {
  public isAdmin$: Observable<any>

  constructor(private store: Store){
    this.isAdmin$ = this.store.select(selectAuthRole)
  }

  displayedColumns: string[] = ['id', 'name', 'timeW', 'price', 'actions'];


  @Input()
  dataSource: subject[] = [];

  @Output()
  delete = new EventEmitter<subject>();

  @Output()
  edit = new EventEmitter<subject>();
}
