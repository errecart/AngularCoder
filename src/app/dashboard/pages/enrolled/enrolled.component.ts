import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrolledActions } from './store/enrolled.actions';
import { Observable } from 'rxjs';
import { enrolled, enrolledSyI } from './model/indexEn';
import { selectEnrolled } from './store/enrolled.selectors';
import { MatDialog } from '@angular/material/dialog';
import { EnrolledDialogComponent } from './components/enrolled-dialog/enrolled-dialog.component';
import { NotificationService } from 'src/app/core/service/notification.service';
import { EnrolledService } from './enrolled.service';
import { selectAuthRole } from 'src/app/store/auth/auth.selector';

@Component({
  selector: 'app-enrolled',
  templateUrl: './enrolled.component.html',
  styleUrls: ['./enrolled.component.css']
})
export class EnrolledComponent implements OnInit {

  displayedColumns = ['id','inscription' ,'subject', 'total', 'action']
  enrolled$: Observable<enrolledSyI[]>
  
  constructor(private store: Store, private matDialog: MatDialog,private notification: NotificationService, private enrolledService: EnrolledService){
    this.enrolled$ = this.store.select(selectEnrolled)
  }

  AddDialog():void{
    this.matDialog.open(EnrolledDialogComponent)
  }

  ngOnInit(): void {
    this.store.dispatch(EnrolledActions.loadEnrolleds())
  }

  delete(enrolledToDelete: enrolled): void{
    if(confirm(`Are you sure you want to eliminate this enrolled?`)){
        this.enrolledService.deleteEnrolledById(enrolledToDelete.id)
      }
  };

}
