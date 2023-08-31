import { Component, EventEmitter, Input, Output } from '@angular/core';
import { student } from '../../models/indexStu';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAuthRole } from 'src/app/store/auth/auth.selector';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  public isAdmin$: Observable<any>

  constructor(private store: Store){
    this.isAdmin$ = this.store.select(selectAuthRole)
  }
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  
  @Input()
  dataSource: student[] = [];
  
  @Output()
  delete = new EventEmitter<student>();
  
  @Output()
  edit = new EventEmitter<student>();

}
