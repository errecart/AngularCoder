import { createActionGroup, props } from "@ngrx/store";
import { student } from "src/app/dashboard/pages/students/models/indexStu";

export const authAction = createActionGroup({
    source:'auth',
    events:{
        'setAuthStudent':props<{data:student | null}>()
    }
})