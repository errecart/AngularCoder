import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
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
        loadChildren: () => import('./pages/students/students.module').then((tm) => tm.StudentsModule)
    },
    {
        path: 'subjects',
        loadChildren: () => import('./pages/subjects/subjects.module').then((tm) => tm.SubjectsModule)
    },
    {
        path: 'inscription',
        canActivate: [adminGuard],
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