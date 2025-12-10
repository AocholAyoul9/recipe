import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecipeList} from './components/recipe-list/recipe-list';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail';
import { AddRecipe } from './components/add-recipe/add-recipe';

export const routes: Routes = [
  { path: '', component: RecipeList },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: 'add', component: AddRecipe }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
