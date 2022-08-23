import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe[] = [new Recipe('A new Recipe 1', 'A test recipe 1.', 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', [new Ingredient('salt', 12), new Ingredient('onion', 20)]),
  new Recipe('A new Recipe 2', 'A test recipe 2.', 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', [new Ingredient('cucumber', 50), new Ingredient('capsicum', 40)])];

  recipeDetail = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }
}
