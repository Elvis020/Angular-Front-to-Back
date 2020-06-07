import { ShoppingListService } from './../shopping-list.service';
import { Ingredients } from './../../shared/ingredients.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;


  constructor(private shopListServy: ShoppingListService) { }

  ngOnInit(): void {
  }

  addItemClicked() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const addIngy = new Ingredients(ingName, ingAmount);
    this.shopListServy.addIngre(addIngy);

  }


}
