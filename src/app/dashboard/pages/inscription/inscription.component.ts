import { Component, Input } from '@angular/core';
import { inscription } from './models/indexIns';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from 'src/app/core/service/notification.service';
import { InscriptionService } from './inscription.service';
import { FormInsciptionComponent } from './components/form-insciption/form-insciption.component';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

  public ins$: Observable<inscription[]>

  displayedColumns: string[] = ['id', 'name', 'lastname', 'email', 'actions'];
  constructor(
    private matDialog: MatDialog,
    private inscriptionService: InscriptionService,
    private notification: NotificationService
    ){
      this.ins$ = this.inscriptionService.getInscription()
    }

    ngOnInit(): void {
      this.inscriptionService.loadInscription()
      this.inscriptionService.getInscription().subscribe({})
    }

    createInscription(): void{
      this.matDialog.open(FormInsciptionComponent).afterClosed().subscribe({
        next: (value)=>{
          if(value){
            this.inscriptionService.CreateInscription({
              name:value.name,
              lastname:value.lastname,
              email:value.email
            });
            this.notification.showSuccess('se cargaro las inscripciones exitosamente')
          }else {
            this.notification.showError('Se a cancelado la inscripcion')
          }
        }
      })
    }

    delete(inscriptionDelete: inscription): void{
      if(confirm(`Are you sure you want to eliminate ${inscriptionDelete.name}`)){
          this.inscriptionService.deleteById(inscriptionDelete.id)
        }
    };



}
