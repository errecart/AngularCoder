import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component'
import {User} from '../../../core/models/index'
import { StudentService } from 'src/app/core/service/user.service';
import { NotificationService } from 'src/app/core/service/notification.service';
import { Observable, map} from 'rxjs';
import { ExampleService } from 'src/app/core/service/example.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnDestroy, OnInit {

  public users: Observable<User[]>;
  contador: number = 0;

  constructor(
    private matDialog: MatDialog,
    private studentService: StudentService,
    private notification: NotificationService,
    private example: ExampleService
    )
    {
      this.studentService.loadUsers()
      this.users = this.studentService.getUsers().pipe(
          map((value)=>value.map((user)=>({...user, lastname: user.lastname.toUpperCase()})))
          );
    }

    
  createUser(): void {
      this.matDialog.open(FormDialogComponent).afterClosed().subscribe({
      next: (value) => {
        if (value) {
          this.studentService.createUser({
            name: value.name,
            email: value.email,
            lastname: value.lastname,
          });
          this.notification.showSuccess('se cargaron los usuarios correctamente')
        } else {
          this.notification.showError('Se a cancelado la inscripcion')
        }
      }
    });
  }
  
  onEditUser(userEdit: User): void{
        const dialogRef = this.matDialog.open(FormDialogComponent, {
          data: userEdit
        })
    dialogRef.afterClosed().subscribe({
      next: (dataUpdate)=>{
        if(dataUpdate){
          this.studentService.updateUserById(userEdit.id, dataUpdate)
        }
      }
    });
  };

  onDeleteUser(userToDelete: User): void{
    if(confirm(`Are you sure you want to eliminate ${userToDelete.name}`)){
        this.studentService.deleteUserById(userToDelete.id)
      }
  };

  ngOnInit() {
    this.example.contador$.subscribe((valor) => {
      this.contador = valor;
    });
  }

  ngOnDestroy() {
    this.example.ngOnDestroy();
    // this.userSubs?.unsubscribe()
    // para q esto funcione hay q hacer this.userBus = a la funcion de subscripcion
  }

}
