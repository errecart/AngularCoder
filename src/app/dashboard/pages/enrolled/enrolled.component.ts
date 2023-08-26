import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrolledActions } from './store/enrolled.actions';
import { Observable } from 'rxjs';
import { enrolledSyI } from './model/indexEn';
import { selectEnrolled } from './store/enrolled.selectors';
import { MatDialog } from '@angular/material/dialog';
import { EnrolledDialogComponent } from './components/enrolled-dialog/enrolled-dialog.component';

@Component({
  selector: 'app-enrolled',
  templateUrl: './enrolled.component.html',
  styleUrls: ['./enrolled.component.css']
})
export class EnrolledComponent implements OnInit {

  displayedColumns = ['id','inscription' ,'subject', 'total']
  enrolled$: Observable<enrolledSyI[]>
  
  constructor(private store: Store, private matDialog: MatDialog){
    this.enrolled$ = this.store.select(selectEnrolled)
  }

  AddDialog():void{
    this.matDialog.open(EnrolledDialogComponent)
  }

  ngOnInit(): void {
    this.store.dispatch(EnrolledActions.loadEnrolleds())
  }
}
