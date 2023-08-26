import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrolledComponent } from './enrolled.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EnrolledRoutingModule } from './enrolled-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { EnrolledEffects } from './store/enrolled.effects';
import { StoreModule } from '@ngrx/store';
import { enrolledFeature } from './store/enrolled.reducer';
import { EnrolledDialogComponent } from './components/enrolled-dialog/enrolled-dialog.component';



@NgModule({
  declarations: [
    EnrolledComponent,
    EnrolledDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EnrolledRoutingModule,
    StoreModule.forFeature(enrolledFeature),
    EffectsModule.forFeature([EnrolledEffects])
  ]
})
export class EnrolledModule { }
