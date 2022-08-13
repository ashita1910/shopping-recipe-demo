import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredient = new EventEmitter();
  @ViewChild('name') name: ElementRef;
  @ViewChild('amount') amount: ElementRef;
  ingredientArr: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient() {
    this.ingredientArr.push(this.name.nativeElement.value);
    this.ingredientArr.push(this.amount.nativeElement.value);
    this.ingredient.emit(this.ingredientArr);
    this.name.nativeElement.value = "";
    this.amount.nativeElement.value = "";
    this.ingredientArr = [];
  }

}
