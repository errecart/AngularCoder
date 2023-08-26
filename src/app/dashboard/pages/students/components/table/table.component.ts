import { Component, EventEmitter, Input, Output } from '@angular/core';
import { student } from '../../models/indexStu';


export interface PeriodicElement {
  id: number;
  name: string;
  LastName: string;
  age: number;
  email: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  displayedColumns: string[] = ['id', 'name', 'email', 'password', 'age', 'actions'];

  @Input()
  dataSource: student[] = [];

  @Output()
  delete = new EventEmitter<student>();

  @Output()
  edit = new EventEmitter<student>();
}
