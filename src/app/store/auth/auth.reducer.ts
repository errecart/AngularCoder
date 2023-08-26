import { createReducer, on } from "@ngrx/store";

import { authAction } from "./auth.actions";
import { student } from "src/app/dashboard/pages/students/models/indexStu";

export const authFeatureKey = 'auth'
export interface AuthState{
    authStudent:student | null
    
}

const initialState: AuthState = {
    authStudent: null
}

export const authReducer = createReducer(initialState, 
    on(authAction.setAuthStudent, (currentState,action)=>{
        return{
            authStudent: action.data
        }
    }))