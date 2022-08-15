import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name') name: ElementRef;
  @ViewChild('amount') amount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient() {
    this.shoppingListService.ingredient.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
    this.name.nativeElement.value = "";
    this.amount.nativeElement.value = "";
  }

}
