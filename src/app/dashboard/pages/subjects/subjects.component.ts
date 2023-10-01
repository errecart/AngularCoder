import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/core/service/notification.service';
import { SubjectService } from './subject.service';
import { FormSubjectsComponent } from './components/form-subjects/form-subjects.component';
import { subject } from './models/indexSub';
import { Store } from '@ngrx/store';
import { selectAuthRole } from 'src/app/store/auth/auth.selector';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html'
})
export class SubjectsComponent {

  public subject: Observable<subject[]>
  public isAdmin$: Observable<any>



  constructor(
    private matDialog: MatDialog,
    private subjectService: SubjectService,
    private notification: NotificationService,
    private store: Store

  ){
    this.subjectService.loadSubject()
    this.subject = this.subjectService.getSubject()
    this.isAdmin$ = this.store.select(selectAuthRole)
  }

  createSubject():void{
    this.matDialog.open(FormSubjectsComponent).afterClosed().subscribe({
      next:(value)=>{
        if(value){
          this.subjectService.createSubject({
            name: value.name,
            timeW: value.timeW,
            price: value.price,
            description: value.description,
            image: value.image
          })
          this.notification.showSuccess('Subject success')
        }else{
          this.notification.showError('Se a cancelado la inscripcion')
        }
      }
    })
  }


  editSubject(subjectEdit: subject): void{
    const dialogRef = this.matDialog.open(FormSubjectsComponent,{
      data:subjectEdit
    })
    dialogRef.afterClosed().subscribe({
      next:(dataUpdate)=>{
        if(dataUpdate){
          this.subjectService.updateSubjectById(subjectEdit.id,dataUpdate)
        }
      }
    })
  }

  deleteSubject(subjectToDelete: subject): void{
    if(confirm(`Are you sure you want to eliminate ${subjectToDelete.name}`)){
        this.subjectService.deleteSubjectById(subjectToDelete.id)
      }
  };

}
