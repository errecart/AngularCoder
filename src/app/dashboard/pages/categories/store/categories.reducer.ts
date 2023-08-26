import { createAction, createFeature, createReducer, on } from '@ngrx/store';
import { CategoriesActions } from './categories.actions';
import { category } from '../models/indexCat';

const mock:category[] = [
  {
    id:1,
    name:'matemarica',
    description:''
  },
  {
    id:2,
    name:'literatura',
    description:''
  },
]

export const categoriesFeatureKey = 'categories';

export interface State {
  categories: category[]
  caregoryDetail: category | null
}

export const initialState: State = {
  categories: [],
  caregoryDetail: null
};

export const reducer = createReducer(
  initialState,
  on(CategoriesActions.loadCategories, state => {
    return{
      // caregoryDetail: state.caregoryDetail,
      ...state,
      categories: mock
    }
  }),

  on(CategoriesActions.loadCategoryDeatils,(state,action) => {
    return{
      // caregoryDetail: state.caregoryDetail,
      ...state,
      categoriesDetail: mock.find((cd) => cd.id === action.categoryId) || null,
    }
  })
  
);

export const categoriesFeature = createFeature({
  name: categoriesFeatureKey,
  reducer,
});

