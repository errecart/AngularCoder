import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { subject } from 'src/app/dashboard/pages/models';
import { NotificationService } from 'src/app/core/service/notification.service';
import { SubjectService } from './subject.service';
import { FormSubjectsComponent } from './components/form-subjects/form-subjects.component';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {

  public subject: Observable<subject[]>

  constructor(
    private matDialog: MatDialog,
    private subjectService: SubjectService,
    private notification: NotificationService
  ){
    this.subjectService.loadSubject()
    this.subject = this.subjectService.getSubject()
  }

  createSubject():void{
    this.matDialog.open(FormSubjectsComponent).afterClosed().subscribe({
      next:(value)=>{
        if(value){
          this.subjectService.createSubject({
            name: value.name,
            timeW: value.timeW,
            price: value.price
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
