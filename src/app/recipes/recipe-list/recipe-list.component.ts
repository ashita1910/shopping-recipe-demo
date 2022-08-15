import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeSercvice: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeSercvice.getRecipes();
  }

  sendRecipeDetail(recipe) {
    this.recipeSercvice.recipeDetail.emit(recipe);
  }

}
