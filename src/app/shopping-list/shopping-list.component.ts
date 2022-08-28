import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredientArr();
    this.shoppingListService.ingredient.subscribe((ingredient: Ingredient) => {
      if(ingredient) {
        this.ingredients.push(ingredient);
        console.log("len: " + this.ingredients.length + this.ingredients[this.ingredients.length - 1].name);
      }
    });
  }

  edit(index: number) {
    console.log("abcd " + index + this.shoppingListService.ingredients[index].name);
    this.shoppingListService.editShoppingList.next(index);
  }

}
