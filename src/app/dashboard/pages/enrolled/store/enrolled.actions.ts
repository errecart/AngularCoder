import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { createEnrolledData, enrolled, enrolledSyI } from '../model/indexEn';
import { HttpErrorResponse } from '@angular/common/http';
import { subject } from '../../subjects/models/indexSub';
import { inscription } from '../../inscription/models/indexIns';

export const EnrolledActions = createActionGroup({
  source: 'Enrolled',
  events: {
    'Load Enrolleds': emptyProps(),
    'Load Enrolleds Success': props<{ data: enrolledSyI[] }>(),
    'Load Enrolleds Failure': props<{ error: HttpErrorResponse }>(),

    'LoadSubjectOptions': emptyProps(),
    'LoadSubjectOptionsSucces': props<{data:subject[]}>(),
    'LoadSubjectOptionsFailure': props<{ error: HttpErrorResponse }>(),

    'LoadInscriptionsOptions': emptyProps(),
    'LoadInscriptionsOptionsSuccess': props<{ data: inscription[] }>(),
    'LoadInscriptionsOptionsFailure': props<{ error: HttpErrorResponse }>(),

    'LoadSubjectsOptions': emptyProps(),
    'LoadSubjectsOptionsSuccess': props<{ data: subject[] }>(),
    'LoadSubjectsOptionsFailure': props<{ error: HttpErrorResponse }>(),


    'CreateEnrolled': props<{data: createEnrolledData}>(),
    'CreateEnrolledSuccess': props<{data: enrolled}>(),
    'CreateEnrolledFailure': props<{error:HttpErrorResponse}>()


  }
});
