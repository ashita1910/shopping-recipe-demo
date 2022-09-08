import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoRecipeDetailComponent } from './recipes/no-recipe-detail/no-recipe-detail.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FetchDataResolverService } from './shared/fetch-data-resolver.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, resolve: [FetchDataResolverService], children: [
    {path: '', component: NoRecipeDetailComponent},
    {path: 'no-recipe', component: NoRecipeDetailComponent},
    {path: 'new', component: RecipeEditComponent, resolve: [FetchDataResolverService]},
    {path: ':id', component: RecipeDetailComponent, resolve: [FetchDataResolverService]},
    {path: ':id/edit', component: RecipeEditComponent, resolve: [FetchDataResolverService]}
  ]},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
