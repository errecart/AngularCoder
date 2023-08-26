import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../subjects/subject.service';
import { ActivatedRoute } from '@angular/router';
import { subject } from '../../../subjects/models/indexSub';
import { Store } from '@ngrx/store';
import { CategoriesActions } from '../../store/categories.actions';
import { Observable } from 'rxjs';
import { selectCategoryDetail } from '../../store/categories.selectors';


@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
})
export class CategoriesDetailsComponent implements OnInit {
displayedColumns = ['id', 'name', 'description']
subject: subject[] = []
categoryName$:Observable<string | undefined>

constructor(
  private subjectService:SubjectService,
  private ActivateRoute:ActivatedRoute,
  private store: Store
  ){
    this.categoryName$ = this.store.select(selectCategoryDetail)
  }

ngOnInit(): void {
    this.store.dispatch(CategoriesActions.loadCategoryDeatils({categoryId:this.ActivateRoute.snapshot.params['id']}))
    this.subjectService.getSubjectByCategoryId(this.ActivateRoute.snapshot.params['id']).subscribe({
      next:(subject) => (this.subject = subject)
    })
}
}
