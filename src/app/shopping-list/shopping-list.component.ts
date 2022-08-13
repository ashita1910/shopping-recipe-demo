import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [new Ingredient('ABC', 10), new Ingredient('XYZ', 20)];
  ingredient = [];

  constructor() { }

  ngOnInit(): void {
  }

  getIngredient(event) {
    this.ingredient = event;
    this.ingredients.push(new Ingredient(this.ingredient[0], this.ingredient[1]));
  }

}
