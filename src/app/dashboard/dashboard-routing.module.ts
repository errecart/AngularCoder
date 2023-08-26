import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SubjectsComponent } from "./pages/subjects/subjects.component";
import { CoursesComponent } from "./pages/courses/courses.component";
import { StudentsDetailsComponent } from "./pages/students/components/students-details/students-details.component";
import { StudentsComponent } from "./pages/students/students.component";
import { adminGuard } from "../core/guards/admin.guard";


@NgModule({
    imports:[

    RouterModule.forChild([
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then((tm) => tm.HomeModule)
    },
    {
        path: 'students',
        canActivate: [adminGuard],
        loadChildren: () => import('./pages/students/students.module').then((tm) => tm.StudentsModule)
    },
    {
        path: 'courses',
        loadChildren: () => import('./pages/courses/courses.module').then((tm) => tm.CoursesModule)
    },
    {
        path: 'subjects',
        loadChildren: () => import('./pages/subjects/subjects.module').then((tm) => tm.SubjectsModule)
    },
    {
        path: 'categories',
        loadChildren: () => import('./pages/categories/categories.module').then((tm) => tm.CategoriesModule)
    },
    {
        path: 'inscription',
        loadChildren: () => import('./pages/inscription/inscription.module').then((tm) => tm.InscriptionModule)
    },
    {
        path: 'enrolled',
        loadChildren: () => import('./pages/enrolled/enrolled.module').then((tm) => tm.EnrolledModule)
    }
        ])

    ],
    exports:[
        RouterModule
    ]
})
export class DashboardRoutingModule{

}