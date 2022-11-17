import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipesSubscription: Subscription;
  filterForm: FormGroup;

  constructor(
    private recipeSercvice: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipesSubscription = this.recipeSercvice.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeSercvice.getRecipes();
    this.filterForm = new FormGroup({
      filterBy: new FormControl(''),
    });
  }

  sendRecipeDetail(index) {
    this.router.navigate([index + 1 + ''], { relativeTo: this.route });
  }

  filter() {
    this.recipes?.sort((a: any, b: any) => {
      return a?.place > b?.place ? 1 : a?.place < b?.place ? -1 : 0;
    });
  }

  clearFilter() {
    this.recipes = this.recipeSercvice.getRecipes();
  }

  ngOnDestroy(): void {
    this.recipesSubscription.unsubscribe();
  }
}
