import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';
import { SubjectsComponent } from './dashboard/pages/subjects/subjects.component';
import { StudentsComponent } from './dashboard/pages/students/students.component';
import { StudentsDetailsComponent } from './dashboard/pages/students/components/students-details/students-details.component';
import { Error404Component } from './dashboard/pages/students/mocks/error404/error404.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      {
        path: 'students',
        children:[
          {
            path:'',
            component: StudentsComponent
          },
          {
            path:':id',
            component:StudentsDetailsComponent
          },
        ]
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'subjects',
        component:SubjectsComponent
      }
    ]
    
  },
  {
    path: '**',
    redirectTo: 'dashboard/students'
  },
  {
    path:'error404',
    component:Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
