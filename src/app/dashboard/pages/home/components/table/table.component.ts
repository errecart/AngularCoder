import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';

export interface PeriodicElement {
  id: number;
  name: string;
  LastName: string;
  email: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // los titulos de la tabla, q hacen referencia a cada valor
  // Tambine hay q hacer el cambio en el HTML
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];

  @Input()
  dataSource: User[] = [];

  @Output()
  delete = new EventEmitter<User>();

  @Output()
  edit = new EventEmitter<User>();
}
