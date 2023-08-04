import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/core/models';

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
goToInvalidProductDetails() {
throw new Error('Method not implemented.');
}

  displayedColumns: string[] = ['id', 'name', 'email', 'password', 'age', 'actions'];

  @Input()
  dataSource: User[] = [];

  @Output()
  delete = new EventEmitter<User>();

  @Output()
  edit = new EventEmitter<User>();
}
