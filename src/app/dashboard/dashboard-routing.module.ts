import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SubjectsComponent } from "./pages/subjects/subjects.component";
import { CoursesComponent } from "./pages/courses/courses.component";
import { StudentsDetailsComponent } from "./pages/students/components/students-details/students-details.component";
import { StudentsComponent } from "./pages/students/students.component";


@NgModule({
    imports:[

    RouterModule.forChild([
    {
        path: 'students',
        loadChildren: () => import('./pages/students/students.module').then((tm) => tm.StudentsModule)
    },
    {
        path: 'courses',
        loadChildren: () => import('./pages/courses/courses.module').then((tm) => tm.CoursesModule)
    },
    {
        path: 'subjects',
        loadChildren: () => import('./pages/subjects/subjects.module').then((tm) => tm.SubjectsModule)
    }
        ])

    ],
    exports:[
        RouterModule
    ]
})
export class DashboardRoutingModule{

}