import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrolledActions } from './enrolled.actions';
import { enrolledSyI } from '../model/indexEn';
import { inscription } from '../../inscription/models/indexIns';
import { subject } from '../../subjects/models/indexSub';

export const enrolledFeatureKey = 'enrolled';

export interface State {
  data:enrolledSyI[]
  inscriptionOptions: inscription[]
  subjectOptions: subject[]
  loading: boolean,
  error:unknown
}

export const initialState: State = {
  data:[],
  inscriptionOptions:[],
  subjectOptions:[],
  loading: false,
  error: null
};

export const reducer = createReducer(
  initialState,


  on(EnrolledActions.loadEnrolleds, state => {
    return{
      ...state,
      loading: true
    }
  }),
  on(EnrolledActions.loadEnrolledsSuccess, (state, action) => {
    return{
      ...state,
      data:action.data,
      loading: false
    }
  }),
  on(EnrolledActions.loadEnrolledsFailure, (state, action) => {
    return{
      ...state,
      error:action.error,
      loading: false
    }
  }),

  on(EnrolledActions.loadInscriptionsOptions, state => state),
  on(EnrolledActions.loadInscriptionsOptionsSuccess, (state,action) => {
    return{
      ...state,
      inscriptionOptions:action.data
    }
  }),
  on(EnrolledActions.loadInscriptionsOptionsFailure, (state,action)=> {
    return{
      ...state,
      error:action.error,
      loading: false
    }
  }),

  on(EnrolledActions.loadSubjectOptions, state => state),
  on(EnrolledActions.loadSubjectsOptionsSuccess, (state,action) => {
    return{
      ...state,
      subjectOptions:action.data
    }
  }),
  on(EnrolledActions.loadSubjectsOptionsFailure, (state,action) => {
    return{
      ...state,
      error:action.error,
      loading: false
    }
  }),
  

);

export const enrolledFeature = createFeature({
  name: enrolledFeatureKey,
  reducer,
});

