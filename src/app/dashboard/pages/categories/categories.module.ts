import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { EffectsModule } from '@ngrx/effects';
import { CategoriesEffects } from './store/categories.effects';
import { StoreModule } from '@ngrx/store';
import { categoriesFeature } from './store/categories.reducer';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesDetailsComponent } from './pages/categories-details/categories-details.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { MatIcon } from '@angular/material/icon';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesDetailsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    SharedModule,
    CategoriesRoutingModule,
    StoreModule.forFeature(categoriesFeature),
    EffectsModule.forFeature([CategoriesEffects])
  ]
})
export class CategoriesModule { }
