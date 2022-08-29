import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id - 1;
      this.editMode = params.id != null ? true : false;
    });
    this.initForm();
  }

  initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDesc = '';
    let ingredients = new FormArray([]);

    if(this.editMode) {
      let recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeDesc = recipe.desc;
      recipeImagePath = recipe.imagePath;
      if(recipe.ingredients) {
        for(let ingredient of recipe.ingredients) {
          ingredients.push(
            new FormGroup({
              ingredientName: new FormControl(ingredient.name),
              ingredientAmount: new FormControl(ingredient.amount)
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imageUrl: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDesc, Validators.required),
      ingredients: ingredients
    });
  }

  onSubmit() {
    console.log("form: ", this.recipeForm);
  }

  addIngredient() {
    let ingredientsArr = this.recipeForm.controls.ingredients as FormArray;
    ingredientsArr.push(new FormGroup({
      ingredientName: new FormControl(),
      ingredientAmount: new FormControl()
    }));
  }

}
