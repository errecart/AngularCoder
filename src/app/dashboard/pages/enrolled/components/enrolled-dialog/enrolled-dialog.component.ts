import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { EnrolledActions } from '../../store/enrolled.actions';
import { Observable } from 'rxjs';
import { inscription } from '../../../inscription/models/indexIns';
import { selectInscriptionOptions, selectSubjectOptions } from '../../store/enrolled.selectors';
import { subject } from '../../../subjects/models/indexSub';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-enrolled-dialog',
  templateUrl: './enrolled-dialog.component.html'
})
export class EnrolledDialogComponent implements OnInit {

  inscriptionIdControl = new FormControl(null,(Validators.required))
  subjectIdControl = new FormControl(null,(Validators.required))

  enrolledForm = new FormGroup({
    inscriptionId: this.inscriptionIdControl,
    subjectId: this.subjectIdControl
  })

  inscriptionOptions$: Observable<inscription[]>
  subjectOptions$: Observable<subject[]>

  constructor(private store:Store,private matDialogRef: MatDialogRef<EnrolledDialogComponent>){
    this.inscriptionOptions$ = this.store.select(selectInscriptionOptions)
    this.subjectOptions$ = this.store.select(selectSubjectOptions)
  }
  ngOnInit(): void {
    this.store.dispatch(EnrolledActions.loadInscriptionsOptions())
    this.store.dispatch(EnrolledActions.loadSubjectOptions())
  }

  submit():void{
    if(this.enrolledForm.invalid){
      this.enrolledForm.markAllAsTouched()
    }else{
      this.store.dispatch(EnrolledActions.createEnrolled({data: this.enrolledForm.getRawValue()}))
      this.matDialogRef.close()
    }
  }
}
