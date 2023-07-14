import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component'
import {User} from './models/index'

const ELEMENT_DATA: User[] = [
  {
    id:1,
    name: 'Juan',
    lastname:'Molina',
    email: 'some@gmail.com'
  },
  {
    id:2,
    name: 'Lucas',
    lastname:'Gomez',
    email: 'else@gmail.com'
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public users: User[] = ELEMENT_DATA

  constructor( private matDialog: MatDialog){}

  createUser(): void{
    const dialogRef = this.matDialog.open(FormDialogComponent)

    dialogRef.afterClosed().subscribe({
      next: (v)=>{
        if(v){
          // this.users.push({
            //   id: this.users.length + 1,
            //   name: v.name,
            //   lastName: v.lastName,
            //   email: v.email
            
            // })
            this.users = [
            ...this.users,{
                id: this.users.length + 1,
                name: v.name,
                lastname: v.lastname,
                email: v.email
            }
          ]
          console.log('we have the value',v);
        }else{
          console.log("it's cancel ");
        }
      }
    });

  };

  deleteUser(userDelete: User): void{
    if(confirm(`Are you sure you want to eliminate ${userDelete.name}`)){
      this.users = this.users.filter((u) => u.id !== userDelete.id)
    }
  }

  editUser(userEdit: User): void{
    const dialogRef = this.matDialog.open(FormDialogComponent, {
      data: userEdit
    })
    dialogRef.afterClosed().subscribe({
      next: (data)=>{
        if(data){
          this.users = this.users.map((user)=>{
            return user.id === userEdit.id ? {...user, ...data} : user
          })
        }
      }
    });
  }

}
