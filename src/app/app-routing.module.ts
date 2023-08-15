import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate:[authGuard],
    component: DashboardComponent,
    loadChildren: ()=> import('./dashboard/dashboard.module').then((tm) => tm.DashboardModule)    
  },
  {
    path: 'auth',
    loadChildren: ()=>import('./auth/auth.module').then((tm)=>tm.AuthModule)
  },
  {
    path: '**',
    redirectTo: '/auth/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
