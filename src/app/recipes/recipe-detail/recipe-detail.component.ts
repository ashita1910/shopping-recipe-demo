import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeDetail: Recipe;

  constructor(private shoppingListService: ShoppingListService, private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recipeDetail = this.recipeService.getRecipeById(params.id - 1);
    });
  }

  addIngredientsToShoppingList() {
    this.shoppingListService.addToShoppingList(this.recipeDetail.ingredients);
  }

}
