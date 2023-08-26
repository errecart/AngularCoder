import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./categories.component";
import { NgModule } from "@angular/core";
import { CategoriesDetailsComponent } from "./pages/categories-details/categories-details.component";


@NgModule({
    imports:[RouterModule.forChild([        
        {
            path:'',
            component:CategoriesComponent
        },
        {
            path:':id',
            component:CategoriesDetailsComponent
        }]
    )],
    exports:[RouterModule]
})

export class CategoriesRoutingModule{}