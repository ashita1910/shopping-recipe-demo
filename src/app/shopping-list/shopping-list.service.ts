import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredients: Ingredient[] = [new Ingredient('ABC', 10), new Ingredient('XYZ', 20)];
  ingredient = new Subject<Ingredient>();
  editShoppingList = new Subject<number>();

  constructor() { }

  getIngredientArr() {
    return this.ingredients.slice();
  }

  getIngredient(ind: number) {
    console.log("item: " + this.ingredients[ind].name + this.ingredients[ind].amount);
    return this.ingredients[ind];
  }

  addToShoppingList(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
  }

  updateIngredient(ind: number, ingredient: Ingredient) {
    this.ingredients[ind].name = ingredient.name;
    this.ingredients[ind].amount = ingredient.amount;
  }
}
