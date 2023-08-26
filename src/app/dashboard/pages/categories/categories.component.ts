import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CategoriesActions } from './store/categories.actions';

import { Observable } from 'rxjs';
import { selectCategoriesArr, selectCategoriesState } from './store/categories.selectors';
import { category } from './models/indexCat';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories$:Observable<category[]>

  constructor(private store:Store){
    this.categories$ = this.store.select(selectCategoriesArr)
  }

  displayedColumns: string[] = ['id', 'name', 'actions'];
  
  ngOnInit(): void {
    this.store.dispatch(CategoriesActions.loadCategories())
  }

}
