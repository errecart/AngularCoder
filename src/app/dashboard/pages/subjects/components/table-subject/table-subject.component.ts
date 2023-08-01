import { Component, EventEmitter, Input, Output } from '@angular/core';
import { subject } from 'src/app/core/models';
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


  displayedColumns: string[] = ['id', 'name', 'timeW', 'price', 'actions'];


  @Input()
  dataSource: subject[] = [];

  @Output()
  delete = new EventEmitter<subject>();

  @Output()
  edit = new EventEmitter<subject>();
}
