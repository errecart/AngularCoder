import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectAuthRole } from 'src/app/store/auth/auth.selector';

export const adminGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  
  return inject(Store).select(selectAuthRole).pipe(
    map((isAd)=>{
      if(!isAd) return router.createUrlTree(['/dashboard/home'])
      return true
    })
  )
  return true;
};
