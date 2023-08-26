import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEnrolled from './enrolled.reducer';

export const selectEnrolledState = createFeatureSelector<fromEnrolled.State>(
  fromEnrolled.enrolledFeatureKey
);

export const selectEnrolled = createSelector(selectEnrolledState, (state)=>state.data)

export const selectInscriptionOptions = createSelector(selectEnrolledState, (state)=>state.inscriptionOptions)
export const selectSubjectOptions = createSelector(selectEnrolledState, (state)=>state.subjectOptions)