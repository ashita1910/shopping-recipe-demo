import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredients: Ingredient[] = [new Ingredient('ABC', 10), new Ingredient('XYZ', 20)];
  ingredient = new EventEmitter<Ingredient>();

  constructor() { }

  getIngredientArr() {
    return this.ingredients.slice();
  }

  addToShoppingList(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
  }
}
