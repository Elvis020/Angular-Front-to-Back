import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ShoppingListService } from './shopping-list.service';
import { Ingredients } from './../shared/ingredients.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];
  private IngreSub: Subscription;

  constructor(private shoppyListServ: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppyListServ.getIngre();
    this.IngreSub = this.shoppyListServ.ingredientsChanged.subscribe((ingred: Ingredients[]) => {
      this.ingredients = ingred;
      console.log(this.ingredients);
    });
  }
  ngOnDestroy(): void {
    this.IngreSub.unsubscribe();
  }

}
