import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCategories from './categories.reducer';

export const selectCategoriesState = createFeatureSelector<fromCategories.State>(
  fromCategories.categoriesFeatureKey
);

export const selectCategoriesArr = createSelector(selectCategoriesState, (state)=> state.categories)

export const selectCategoryDetail = createSelector(selectCategoriesState, (state)=> state.caregoryDetail?.name)