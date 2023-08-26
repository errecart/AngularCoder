import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState, authFeatureKey } from "./auth.reducer";


export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey)

export const selectAuthStudent = createSelector(selectAuthState, (state)=>state.authStudent)

export const selectAuthRole = createSelector(selectAuthState, (state)=> state.authStudent?.role)